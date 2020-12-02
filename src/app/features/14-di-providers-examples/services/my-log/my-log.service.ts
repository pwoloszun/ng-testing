import { Injectable } from '@angular/core';


export interface IMyLogService {
  log(data: any): void;

  getData(): string;
}

@Injectable({
  providedIn: 'root'
})
export class MyLogService implements IMyLogService {

  constructor() {
    console.log('qq MyLogService instance', Math.random());
  }

  log(data: any): void {
    console.log('MyLogService.log()', data);
  }

  getData(): string {
    return 'MyLogService';
  }
}
