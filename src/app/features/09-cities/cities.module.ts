import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './pages/cities/cities.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CitiesRoutingModule,
  ],
  declarations: [
    CitiesComponent,
  ],
})
export class CitiesModule {
}
