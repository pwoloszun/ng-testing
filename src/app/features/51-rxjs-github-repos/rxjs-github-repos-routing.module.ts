import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepositoryListComponent } from './pages/repository-list/repository-list.component';

const routes: Routes = [
  {
    path: '',
    component: RepositoryListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsGithubReposRoutingModule {}
