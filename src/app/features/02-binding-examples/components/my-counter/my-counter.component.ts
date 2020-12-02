import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'nts-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  @Input() label: string;
  @Input() value = 10;

  @Output() increment = new EventEmitter<number>();

  handleIncrementClick() {
    this.value += 1;
    this.increment.emit(this.value);
  }

  ngOnInit() {
  }
}
