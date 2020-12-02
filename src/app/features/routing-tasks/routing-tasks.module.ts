import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { RoutingTasksRoutingModule } from './routing-tasks-routing.module';
import { TeamListComponent } from './pages/team-list/team-list.component';
import { TeamDetailsComponent } from './pages/team-details/team-details.component';
import { PlayerListComponent } from './pages/player-list/player-list.component';
import { PlayerDetailsComponent } from './pages/player-details/player-details.component';
import { NbaMenuComponent } from './context-menus/nba-menu/nba-menu.component';
import { TeamMenuComponent } from './context-menus/team-menu/team-menu.component';
import { PlayerMenuComponent } from './context-menus/player-menu/player-menu.component';
import { TeamRosterComponent } from './pages/team-roster/team-roster.component';
import { PlayerStatsComponent } from './pages/player-stats/player-stats.component';
import { ShellTeamsComponent } from './pages/shell-teams/shell-teams.component';
import { ShellPlayersComponent } from './pages/shell-players/shell-players.component';

@NgModule({
  declarations: [
    TeamListComponent,
    TeamDetailsComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    NbaMenuComponent,
    TeamMenuComponent,
    PlayerMenuComponent,
    TeamRosterComponent,
    PlayerStatsComponent,
    ShellTeamsComponent,
    ShellPlayersComponent,
  ],
  imports: [
    CommonModule,
    RoutingTasksRoutingModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ]
})
export class RoutingTasksModule { }
