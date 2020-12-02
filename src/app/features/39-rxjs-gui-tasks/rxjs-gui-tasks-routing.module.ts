import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsGuiTasksComponent } from './pages/rxjs-gui-tasks/rxjs-gui-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsGuiTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsGuiTasksRoutingModule {
}
