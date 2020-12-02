import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { RxjsGuiTasksRoutingModule } from './rxjs-gui-tasks-routing.module';
import { RxjsGuiTasksComponent } from './pages/rxjs-gui-tasks/rxjs-gui-tasks.component';
import { GetUserComponent } from './containers/get-user/get-user.component';
import { MySearchComponent } from './containers/my-search/my-search.component';

@NgModule({
  declarations: [RxjsGuiTasksComponent, GetUserComponent, MySearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    // feature specific
    RxjsGuiTasksRoutingModule,
  ]
})
export class RxjsGuiTasksModule {
}
