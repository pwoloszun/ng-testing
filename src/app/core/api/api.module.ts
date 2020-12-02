import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataApiService } from './data-api.service';
import { TodosService } from './todos.service';
import { FakeApiService } from './fake-api.service';
import { SearchApiService } from './search-api.service';
import { RealEstatesApiService } from './real-estates-api.service';
import { HeroesService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    DataApiService,
    TodosService,
    FakeApiService,
    SearchApiService,
    RealEstatesApiService,
    HeroesService,
  ],
})
export class ApiModule {
}
