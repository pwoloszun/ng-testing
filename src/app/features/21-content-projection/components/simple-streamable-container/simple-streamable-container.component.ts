import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


const SIMPLE_STREAM_STATUS = {
  none: 'NONE',
  isLoading: 'IS_LOADING',
  isEmitting: 'IS_EMITTING',
  errorClosed: 'ERROR_CLOSED',
};

@Component({
  selector: 'nts-simple-streamable-container',
  templateUrl: './simple-streamable-container.component.html',
  styleUrls: ['./simple-streamable-container.component.css']
})
export class SimpleStreamableContainerComponent implements OnChanges, OnDestroy {

  @Input()
  dataStream: Observable<any>;

  allStatuses = SIMPLE_STREAM_STATUS;
  currentStatus = SIMPLE_STREAM_STATUS.none;

  private subscription: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataStream && this.dataStream) {
      this.clearStream();
      this.currentStatus = SIMPLE_STREAM_STATUS.isLoading;
      this.subscription = this.dataStream.subscribe(
        (value) => {
          this.currentStatus = SIMPLE_STREAM_STATUS.isEmitting;
        },
        (error) => {
          this.currentStatus = SIMPLE_STREAM_STATUS.errorClosed;
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.clearStream();
  }

  private clearStream() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
