import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsTasksComponent } from './pages/forms-tasks/forms-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: FormsTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsTasksRoutingModule {
}
