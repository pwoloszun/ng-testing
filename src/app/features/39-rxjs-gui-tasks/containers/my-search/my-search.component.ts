import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { SearchApiService } from '../../../../core/api/search-api.service';

@Component({
  selector: 'nts-my-search',
  templateUrl: './my-search.component.html',
  styleUrls: ['./my-search.component.css']
})
export class MySearchComponent {

  searchText = new FormControl('');

  searchResults$ = this.searchText.valueChanges.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    switchMap((query: string) => this.searchApiService.querySearch$(query)),
  );

  constructor(private searchApiService: SearchApiService) {
  }

}
