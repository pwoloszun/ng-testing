import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { RealEstatesRoutingModule } from './real-estates-routing.module';
import { RealEstatesComponent } from './pages/real-estates/real-estates.component';
import { EstateDetailsComponent } from './components/estate-details/estate-details.component';
import { ManageRealEstatesService } from './services/manage-real-estates.service';

@NgModule({
  declarations: [RealEstatesComponent, EstateDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    // feature specific
    RealEstatesRoutingModule,
  ],
  providers: [
    ManageRealEstatesService,
  ],
})
export class RealEstatesModule {
}
