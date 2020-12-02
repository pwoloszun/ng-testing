import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-two-way-binding-example',
  templateUrl: './two-way-binding-example.component.html',
  styleUrls: ['./two-way-binding-example.component.css']
})
export class TwoWayBindingExampleComponent implements OnInit {

  message;
  types: string[];

  ngOnInit(): void {
    this.types = [
      'Private',
      'Public',
      'Top secret'
    ];

    this.message = {
      text: 'Imba!',
      type: this.types[0]
    };
  }

}
