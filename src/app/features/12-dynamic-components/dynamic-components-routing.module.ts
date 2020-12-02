import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicComponentsComponent } from './pages/dynamic-components/dynamic-components.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentsRoutingModule {
}
