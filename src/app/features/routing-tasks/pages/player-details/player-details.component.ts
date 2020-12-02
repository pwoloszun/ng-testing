import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NbaPlayer } from '@app/core/api/nba/nba-players-api.service';
import { NbaTeam } from '@app/core/api/nba/nba-teams-api.service';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-player-details',
  templateUrl: './player-details.component.html',
})
export class PlayerDetailsComponent implements OnInit {

  player$: Observable<NbaPlayer>;
  team$: Observable<NbaTeam>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.parent.snapshot.paramMap.get('id');
    const playerId = parseInt(id, 10);
    this.player$ = this.nbaInfo.getPlayer$(playerId);
    this.team$ = this.nbaInfo.getTeamByPlayerId$(playerId);
  }

}
