import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoFormVm } from '../../components/todos-form/todos-form.component';
import { MyManageTodosService, Todo } from '../../services/my-manage-todos.service';

@Component({
  selector: 'nts-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private todosService: MyManageTodosService) {
  }

  ngOnInit() {
    this.todos$ = this.todosService.allTodos$;
  }

  deleteTodo(todo) {
    this.todosService.remove(todo);
  }

  createTodo(todoData: TodoFormVm) {
    this.todosService.create(todoData);
  }
}
