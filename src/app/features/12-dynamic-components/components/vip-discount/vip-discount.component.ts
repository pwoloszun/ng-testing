import { Component, OnInit } from '@angular/core';

import { Discount } from '../discount';

@Component({
  selector: 'nts-vip-discount',
  templateUrl: './vip-discount.component.html',
  styleUrls: ['./vip-discount.component.css']
})
export class VipDiscountComponent implements OnInit, Discount {

  value = 99;
  percentage = 50;

  ngOnInit() {
  }

}
