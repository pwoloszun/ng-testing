import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosFormComponent } from './components/todos-form/todos-form.component';
import { TodosComponent } from './pages/todos/todos.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    SharedModule,
  ],
  declarations: [
    TodosListComponent,
    TodosFormComponent,
    TodosComponent,
  ],
})
export class TodosModule {
}
