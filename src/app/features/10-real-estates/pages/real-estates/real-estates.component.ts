import { Component, OnInit } from '@angular/core';

import { MetaData } from '../../../../shared/data-table/meta-data';
import { ManageRealEstatesService } from '../../services/manage-real-estates.service';
import { RealEstate } from '../../services/real-estate.model';

@Component({
  selector: 'nts-real-estates',
  templateUrl: './real-estates.component.html',
  styleUrls: ['./real-estates.component.css']
})
export class RealEstatesComponent implements OnInit {

  listHeaders: MetaData[];

  constructor(public manageService: ManageRealEstatesService) {
  }

  ngOnInit() {
    this.listHeaders = [
      { value: 'street', text: 'Ulica' },
      { value: 'lat', text: 'Wysokosc geo.' },
      { value: 'lng', text: 'Dlugosc geo.' },
    ];
    this.manageService.fetch();
  }

  onRealEstateClick(realEstate: RealEstate) {
    console.log('RE clicked:', realEstate);
    this.manageService.toggleRealEstate(realEstate);
  }

}
