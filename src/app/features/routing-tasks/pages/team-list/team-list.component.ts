import { Component, OnInit } from '@angular/core';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-team-list',
  templateUrl: './team-list.component.html',
})
export class TeamListComponent implements OnInit {

  teams$;

  constructor(
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    this.teams$ = this.nbaInfo.getAllTeams$();
  }

}
