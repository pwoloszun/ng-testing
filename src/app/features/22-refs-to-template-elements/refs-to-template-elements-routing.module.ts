import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefsExamplesComponent } from './pages/refs-examples/refs-examples.component';

const routes: Routes = [
  {
    path: '',
    component: RefsExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefsToTemplateElementsRoutingModule { }
