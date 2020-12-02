import { Component, OnInit } from '@angular/core';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-player-list',
  templateUrl: './player-list.component.html',
})
export class PlayerListComponent implements OnInit {

  players$;

  constructor(
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    this.players$ = this.nbaInfo.getAllPlayers$();
  }

}
