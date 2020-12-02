import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { RegularCustomerDiscountComponent } from '../../components/regular-customer-discount/regular-customer-discount.component';
import { TimeRangeDiscountComponent } from '../../components/time-range-discount/time-range-discount.component';
import { VipDiscountComponent } from '../../components/vip-discount/vip-discount.component';
import { Discount } from '../../components/discount';

class DiscountItem {
  constructor(
    public componentClass: Type<any>,
    public inputValues: any
  ) {
  }
}

const weekInMs = 7 * 24 * 3600000;

@Component({
  selector: 'nts-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
})
export class DynamicComponentsComponent implements OnInit {

  @ViewChild('discountPlaceholder', { read: ViewContainerRef, static: true })
  discountPlaceholder: ViewContainerRef;

  private discountItems = [
    new DiscountItem(RegularCustomerDiscountComponent, { percentage: 7 }),
    new DiscountItem(TimeRangeDiscountComponent, {
      value: 25,
      startDt: Date.now() - weekInMs,
      endDt: Date.now() + weekInMs,
    }),
    new DiscountItem(VipDiscountComponent, { value: 99, percentage: 50 }),
  ];

  private intervalId: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadDiscount();
  }

  loadDiscount() {
    let i = 0;
    this.intervalId = setInterval(() => {
      i++;
      const index = i % this.discountItems.length;
      const discountItem = this.discountItems[index];
      this.renderDiscount(discountItem);
    }, 3800);
  }

  private renderDiscount(discountItem: DiscountItem) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(discountItem.componentClass);

    this.discountPlaceholder.clear();
    const componentRef = this.discountPlaceholder
      .createComponent(componentFactory);

    const { inputValues } = discountItem;
    this.passInputValues(componentRef, inputValues);
  }

  private passInputValues(componentRef: ComponentRef<Discount>, inputValues: object) {
    const instance = componentRef.instance;
    for (const inputName in inputValues) {
      if (inputValues.hasOwnProperty(inputName)) {
        const value = inputValues[inputName];
        instance[inputName] = value;
      }
    }
  }

}
