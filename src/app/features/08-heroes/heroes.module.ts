import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './pages/heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HeroesRoutingModule,
  ],
  declarations: [
    HeroesComponent,
  ],
})
export class HeroesModule {
}
