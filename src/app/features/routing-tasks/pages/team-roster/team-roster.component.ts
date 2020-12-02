import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-team-roster',
  templateUrl: './team-roster.component.html',
})
export class TeamRosterComponent implements OnInit {

  teamRoster$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    const abbr = this.activatedRoute.parent.snapshot.paramMap.get('abbr');
    this.teamRoster$ = this.nbaInfo.getTeamRosterBy$(abbr);
  }

}
