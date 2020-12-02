import { Component, OnInit } from '@angular/core';

import { Discount } from '../discount';

@Component({
  selector: 'nts-time-range-discount',
  templateUrl: './time-range-discount.component.html',
  styleUrls: ['./time-range-discount.component.css']
})
export class TimeRangeDiscountComponent implements OnInit, Discount {

  value: number;
  startDt: Date;
  endDt: Date;

  ngOnInit() {
  }

}
