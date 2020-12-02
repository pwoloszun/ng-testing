import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nts-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() value: number;
  @Input() updatedAt: number;

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();

  get formattedDate(): string {
    if (!this.updatedAt) {
      return null;
    }
    const dt = new Date(this.updatedAt);
    return dt.toISOString().substr(11, 8);
  }

  incrementHandler() {
    this.increment.emit();
  }

  decrementHandler() {
    this.decrement.emit();
  }

  resetHandler() {
    this.reset.emit();
  }
}
