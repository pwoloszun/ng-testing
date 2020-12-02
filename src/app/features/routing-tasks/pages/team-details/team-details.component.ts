import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NbaInfoService } from '../../services/nba-info.service';

@Component({
  selector: 'nts-team-details',
  templateUrl: './team-details.component.html',
})
export class TeamDetailsComponent implements OnInit {

  team$;

  constructor(
    private activatedRoute: ActivatedRoute,
    private nbaInfo: NbaInfoService,
  ) { }

  ngOnInit(): void {
    const abbr = this.activatedRoute.parent.snapshot.paramMap.get('abbr');
    this.team$ = this.nbaInfo.getTeamByAbbr$(abbr);
  }

}
