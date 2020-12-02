import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';

const routes: Routes = [
  {
    path: '',
    component: CustomDirectivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectivesRoutingModule {
}
