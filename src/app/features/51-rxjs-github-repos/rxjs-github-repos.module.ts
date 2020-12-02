import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoaderModule } from '@shared/loader/loader.module';
import { CustomMaterialModule } from '@shared/custom-material/custom-material.module';

import { RxjsGithubReposRoutingModule } from './rxjs-github-repos-routing.module';
import { RepositoryListComponent } from './pages/repository-list/repository-list.component';

@NgModule({
  declarations: [RepositoryListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    // app
    CustomMaterialModule,
    LoaderModule,
    RxjsGithubReposRoutingModule,
  ],
})
export class RxjsGithubReposModule { }
