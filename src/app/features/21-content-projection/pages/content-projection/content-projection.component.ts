import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { SearchApiService } from '../../../../core/api/search-api.service';

@Component({
  selector: 'nts-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.css']
})
export class ContentProjectionComponent implements OnDestroy {

  isFetching = false;
  searchResults = [];
  private searchSubscription: Subscription;

  myRequest$: Subject<Date>;

  constructor(private searchApiService: SearchApiService) {
  }

  getDataHandler() {
    this.isFetching = true;
    this.searchSubscription = this.searchApiService
      .querySearch$('batman')
      .subscribe((searchResults) => {
        this.isFetching = false;
        this.searchResults = searchResults;
      });
  }

  sendRequestHandler() {
    this.myRequest$ = new Subject();
  }

  dataReceivedHandler() {
    this.myRequest$.next(new Date());
  }

  errorOccurredHandler() {
    this.myRequest$.error(new Error(`Can't current time [${Math.random().toFixed(4)}]`));
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
