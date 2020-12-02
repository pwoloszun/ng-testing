import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyOtherService {

  constructor() {
    console.log('other MyOtherService instance', `other-${Math.random()}`);
  }

  doSomething(data: any) {
    console.log('doSomething MyOtherService.doSomething()', data);
  }
}
