import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentProjectionComponent } from '../21-content-projection/pages/content-projection/content-projection.component';
import { DiProvidersExamplesComponent } from './pages/di-providers-examples/di-providers-examples.component';



const routes: Routes = [
  {
    path: '',
    component: DiProvidersExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiProvidersExamplesRoutingModule { }
