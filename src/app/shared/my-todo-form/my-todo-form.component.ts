import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export interface TodoFormData {
  title: string;
  description?: string;
}

@Component({
  selector: 'nts-my-todo-form',
  templateUrl: './my-todo-form.component.html',
  styleUrls: ['./my-todo-form.component.css']
})
export class MyTodoFormComponent implements OnInit {

  @Output() createItem = new EventEmitter<TodoFormData>();

  title: string;
  description: string;

  public onSubmit() {
    const { title, description } = this;
    this.createItem.emit({
      title,
      description
    });
    this.title = null;
    this.description = null;
  }

  ngOnInit() {
  }

}
