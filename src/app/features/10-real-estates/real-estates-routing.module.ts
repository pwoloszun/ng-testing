import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstatesComponent } from './pages/real-estates/real-estates.component';

const routes: Routes = [
  {
    path: '',
    component: RealEstatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstatesRoutingModule {
}
