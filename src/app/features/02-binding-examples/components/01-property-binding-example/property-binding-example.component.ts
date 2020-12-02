import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-property-binding-example',
  templateUrl: './property-binding-example.component.html',
})
export class PropertyBindingExampleComponent implements OnInit {

  bob;
  isBtnDisabled: boolean;
  url: string;

  ngOnInit() {
    this.bob = {name: 'Uncle Bob', sex: 'M'};
    this.isBtnDisabled = true;
    this.url = 'http://www.mememaker.net/static/images/memes/4572301.jpg';
  }
}
