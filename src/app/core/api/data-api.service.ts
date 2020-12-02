import { Injectable, Optional, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const delayInMs = 1200;

export interface SearchParams {
  [param: string]: string | string[];
}

import { InjectionToken } from '@angular/core';

export type DataApiUrl = string;

export const DATA_API_URL = new InjectionToken<DataApiUrl>('DataApiUrl');

@Injectable()
export class DataApiService<T extends { id: number }> {
  constructor(
    private http: HttpClient,
    @Optional() @Inject(DATA_API_URL) private url: DataApiUrl
  ) {
  }

  find(id: any): Observable<T> {
    return this.http.get(this.getSingleUrl({ id }))
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs)
      );
  }

  search(params: SearchParams): Observable<T[]> {
    return this.http.get(this.getUrl(), { params })
      .pipe(
        map((items: object[]) => items as T[]),
        delay(delayInMs)
      );
  }

  update(id: number, changes: Partial<T>): Observable<T> {
    return this.http.put(this.getSingleUrl({ id }), changes)
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs),
      );
  }

  remove(entity: T): Observable<number> {
    const { id } = entity;
    return this.http.delete(this.getSingleUrl(entity))
      .pipe(
        map(() => id),
        delay(delayInMs)
      );
  }

  create(entity: any): Observable<T> {
    return this.http.post(this.getUrl(), entity)
      .pipe(
        map((o: object) => o as T),
        delay(delayInMs)
      );
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .pipe(
        map((items: object[]) => items as T[]),
        delay(delayInMs)
      );
  }

  getUrl(): string {
    if (!this.url || this.url.length < 1) {
      throw new Error('Abstract method');
    }
    return this.url;
  }

  setUrl(url: string): void {
    this.url = url;
  }

  private getSingleUrl({ id }): string {
    return `${this.getUrl()}/${id}`;
  }

}
