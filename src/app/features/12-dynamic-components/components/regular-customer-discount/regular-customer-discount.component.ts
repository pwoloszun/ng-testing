import { Component, OnInit } from '@angular/core';

import { Discount } from '../discount';

@Component({
  selector: 'nts-regular-customer-discount',
  templateUrl: './regular-customer-discount.component.html',
  styleUrls: ['./regular-customer-discount.component.css']
})
export class RegularCustomerDiscountComponent implements OnInit, Discount {

  percentage = 0;

  ngOnInit() {
  }

}
