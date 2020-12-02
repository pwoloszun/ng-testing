import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { TeamRosterComponent } from './pages/team-roster/team-roster.component';
import { PlayerStatsComponent } from './pages/player-stats/player-stats.component';
import { ShellTeamsComponent } from './pages/shell-teams/shell-teams.component';
import { ShellPlayersComponent } from './pages/shell-players/shell-players.component';

const routes: Routes = [
  // teams
  {
    path: 'teams/:abbr',
    component: ShellTeamsComponent,
    children: [
      { path: 'roster', component: TeamRosterComponent },
      { path: 'details', component: TeamDetailsComponent },
      { path: '', redirectTo: 'details', pathMatch: 'full' },
    ]
  },
  { path: 'teams', component: TeamListComponent },

  // players
  {
    path: 'players/:id',
    component: ShellPlayersComponent,
    children: [
      { path: 'bio', component: PlayerDetailsComponent },
      { path: 'stats', component: PlayerStatsComponent },
      { path: '', redirectTo: 'bio', pathMatch: 'full' },
    ]
  },
  { path: 'players', component: PlayerListComponent },

  // default
  { path: '', redirectTo: 'teams', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTasksRoutingModule { }
