import { Component, Input } from '@angular/core';

@Component({
  selector: 'nts-estate-details',
  templateUrl: './estate-details.component.html',
  styleUrls: ['./estate-details.component.css']
})
export class EstateDetailsComponent {

  @Input() item: any;

}
