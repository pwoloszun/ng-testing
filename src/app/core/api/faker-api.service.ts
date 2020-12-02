import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as faker from 'faker';
import { randomBetween } from '../../utils/index';

const DELAY_IN_MS = 1800;

export interface Feed {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class FakerApiService {

  private allGeneratedFeeds = [];
  private feedsSubject$ = new BehaviorSubject([...this.allGeneratedFeeds]);
  public isLoadingSubject$ = new BehaviorSubject(false);

  public allFeeds$ = this.feedsSubject$.asObservable();
  public isLoading$ = this.isLoadingSubject$.asObservable();

  loadFeeds(count: number): void {
    this.isLoadingSubject$.next(true);
    setTimeout(() => {
      for (let index = 0; index < count; index++) {
        const feed = this.generateFeed();
        this.allGeneratedFeeds.push(feed);
      }
      this.feedsSubject$.next([...this.allGeneratedFeeds]);
      this.isLoadingSubject$.next(false);
    }, DELAY_IN_MS);
  }

  private generateFeed(): Feed {
    return {
      id: faker.random.number(),
      title: faker.lorem.word(),
      content: faker.lorem.words(),
      createdAt: faker.date.past().toISOString(),
    };
  }
}
