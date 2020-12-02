import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

import { TODOS_DATA } from '../fake-data/todos-data';

export interface TodoParams {
  title: string;
  description?: string;
}

export interface Todo extends TodoParams {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class MyManageTodosService {

  private todosSubject$ = new BehaviorSubject([...TODOS_DATA]);

  allTodos$ = this.todosSubject$.asObservable();

  create({ title, description }: TodoParams) {
    const nextTodos = [...this.todosSubject$.value, {
      id: Math.random(),
      title,
      description
    }];
    this.todosSubject$.next(nextTodos);
  }

  remove(todo: Todo) {
    const nextTodos = this.todosSubject$.value.filter((t) => t.id !== todo.id);
    this.todosSubject$.next(nextTodos);
  }
}
