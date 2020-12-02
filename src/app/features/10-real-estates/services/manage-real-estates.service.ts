import { Injectable } from '@angular/core';

import { RealEstatesApiService } from '../../../core/api/real-estates-api.service';
import { RealEstate } from './real-estate.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ManageRealEstatesService {

  selectedRealEstate$: BehaviorSubject<RealEstate> = new BehaviorSubject(null);
  realEstates$: BehaviorSubject<RealEstate[]> = new BehaviorSubject([]);

  constructor(private apiService: RealEstatesApiService) {
  }

  fetch() {
    this.reset();
    this.apiService.getAll().subscribe((realEstates: RealEstate[]) => {
      this.realEstates$.next(realEstates);
    });
  }

  toggleRealEstate(estate: RealEstate) {
    if (this.selectedRealEstate$.value === estate) {
      this.reset();
    } else {
      this.selectedRealEstate$.next(estate);
    }
  }

  private reset() {
    this.selectedRealEstate$.next(null);
  }
}
