import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestingShellComponent } from './pages/testing-shell/testing-shell.component';
import { QueryingComponent } from './pages/01-querying/querying.component';
import { AssertionsComponent } from './pages/02-assertions/assertions.component';
import { CommandsComponent } from './pages/03-commands/commands.component';
import { WaitUntilComponent } from './pages/wait-until/wait-until.component';
import { AdvQueryingTasksComponent } from './pages/adv-querying-tasks/adv-querying-tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TestingShellComponent,
    children: [
      { path: 'querying', component: QueryingComponent },
      { path: 'assertions', component: AssertionsComponent },
      { path: 'commands', component: CommandsComponent },
      { path: 'wait-until', component: WaitUntilComponent },
      { path: 'adv-querying', component: AdvQueryingTasksComponent },

      { path: '', redirectTo: 'querying', pathMatch: 'full' },
    ]
  },
  // { path: 'teams', component: TeamListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyTasksRoutingModule { }
