import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nts-team-menu',
  templateUrl: './team-menu.component.html',
  styleUrls: ['./team-menu.component.css']
})
export class TeamMenuComponent implements OnInit {

  get routeExtras() {
    return { relativeTo: this.activatedRoute.parent };
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  navigateTeamRoster() {
    const abbr = this.activatedRoute.snapshot.paramMap.get('abbr');
    // this.router.navigate([{ outlets: { primary: ['teams', abbr, 'roster'] } }], this.routeExtras);
  }

  navigateToTeamDetails() {
    const abbr = this.activatedRoute.snapshot.paramMap.get('abbr');
    // this.router.navigate([{ outlets: { primary: ['teams', abbr] } }], this.routeExtras);
  }
}
