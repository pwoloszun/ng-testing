import { Injectable } from '@angular/core';

import { DataApiService } from './data-api.service';
import { RealEstate } from '../../features/10-real-estates/services/real-estate.model';

@Injectable()
export class RealEstatesApiService extends DataApiService<RealEstate> {
  getUrl(): string {
    return '/api/real-estates';
  }
}
