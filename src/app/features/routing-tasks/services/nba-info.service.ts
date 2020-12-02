import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { NbaTeam, NbaTeamsApiService } from '@api/nba/nba-teams-api.service';
import { NbaPlayer, NbaPlayersApiService } from '@api/nba/nba-players-api.service';
import { NbaIndividualStats, NbaIndividualStatsApiService } from '@api/nba/nba-individual-stats-api.service';

const defaultPlayerSort = (p1: NbaPlayer, p2: NbaPlayer): number => {
  const fullName1 = `${p1.last_name}, ${p1.first_name}`;
  const fullName2 = `${p2.last_name}, ${p2.first_name}`;
  if (fullName1 < fullName2) {
    return -1;
  } else if (fullName1 > fullName2) {
    return 1;
  } else {
    return 0;
  }
};

@Injectable({
  providedIn: 'root'
})
export class NbaInfoService {

  constructor(
    private teamsApi: NbaTeamsApiService,
    private playersApi: NbaPlayersApiService,
    private statsApi: NbaIndividualStatsApiService
  ) { }

  getAllTeams$(): Observable<NbaTeam[]> {
    return this.teamsApi.getAllTeams$().pipe(
      shareReplay(1)
    );
  }

  getTeamByAbbr$(abbr: string): Observable<NbaTeam> {
    return this.teamsApi.getTeamByAbbr$(abbr);
  }

  getAllPlayers$(): Observable<NbaPlayer[]> {
    return this.playersApi.getAllPlayers$().pipe(
      map((players) => players.sort(defaultPlayerSort)),
      shareReplay(1)
    );
  }

  getTeamRosterBy$(abbr: string): Observable<NbaPlayer[]> {
    return this.teamsApi.getTeamByAbbr$(abbr).pipe(
      switchMap((team: NbaTeam) => this.playersApi.getTeamRosterBy$(team.id))
    );
  }

  getPlayer$(playerId: number): Observable<NbaPlayer> {
    return this.playersApi.getPlayer$(playerId);
  }

  getTeamByPlayerId$(playerId: number): Observable<NbaTeam> {
    return this.getPlayer$(playerId).pipe(
      switchMap((player: NbaPlayer) => this.teamsApi.getTeamById$(player.team_id))
    );
  }

  getManyPlayersStats$(playerIds: number[]): Observable<NbaIndividualStats[]> {
    return this.statsApi.getPlayersStats$(playerIds);
  }

  getSinglePlayerStats$(playerId: number): Observable<NbaIndividualStats> {
    return this.statsApi.getPlayersStats$([playerId]).pipe(
      map(([firstStats]) => firstStats)
    );
  }
}
