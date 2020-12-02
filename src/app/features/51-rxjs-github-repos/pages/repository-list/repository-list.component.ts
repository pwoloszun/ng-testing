import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap, filter } from 'rxjs/operators';

import { searchQuery } from '../../operators/search-query';
import { SearchReposFacadeService, RepositoryType, RepoItem } from '../../facades/search-repos-facade.service';

const SEARCH_QUERY_MIN_LENGTH = 3;

@Component({
  selector: 'nts-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent implements OnInit {
  get isLoading$() {
    return this.searchReposFacadeService.isLoading$;
  }

  get selectedOwner$() {
    return this.searchReposFacadeService.selectedOwner$;
  }

  get ownerAllRepos$() {
    return this.searchReposFacadeService.ownerAllRepos$;
  }

  searchResults$: Observable<RepoItem[]>;
  searchForm = this.buildSearchForm();

  private get searchQueryControl(): FormControl {
    return this.searchForm.get('searchQuery') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private searchReposFacadeService: SearchReposFacadeService
  ) { }

  ngOnInit() {
    this.initSearchForm();
  }

  selectRepoHandler(repo: RepoItem) {
    this.searchReposFacadeService.selectRepo(repo);
  }

  private buildSearchForm(): FormGroup {
    return this.fb.group({
      searchQuery: [''],
    });
  }

  private initSearchForm() {
    this.searchResults$ = this.searchQueryControl.valueChanges.pipe(
      searchQuery(500, ''),
      filter((query: string) => query.length >= SEARCH_QUERY_MIN_LENGTH),
      switchMap((query) => this.searchReposFacadeService.searchRepos(query, RepositoryType.USER)),
      tap((items: RepoItem[]) => console.log(items))
    );
  }

}
