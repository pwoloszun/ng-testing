import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

const BETTER_STREAM_STATUS = {
  none: 'NONE',
  isLoading: 'IS_LOADING',
  isEmitting: 'IS_EMITTING',
  errorClosed: 'ERROR_CLOSED',
};

@Component({
  selector: 'nts-better-streamable-container',
  templateUrl: './better-streamable-container.component.html',
  styleUrls: ['./better-streamable-container.component.css']
})
export class BetterStreamableContainerComponent implements OnChanges, OnDestroy {

  @Input() dataStream: Observable<any>;

  @Input() loadingTemplate: TemplateRef<any>;
  @Input() errorTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;

  currentStatus = BETTER_STREAM_STATUS.none;
  allStatuses = BETTER_STREAM_STATUS;

  receivedData: any = null;
  receivedError: Error = null;

  private subscription: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataStream && this.dataStream) {
      this.clearStream();
      this.currentStatus = BETTER_STREAM_STATUS.isLoading;
      this.subscription = this.dataStream.subscribe(
        (value) => {
          this.receivedData = value;
          this.currentStatus = BETTER_STREAM_STATUS.isEmitting;
        },
        (error) => {
          this.receivedError = error;
          this.currentStatus = BETTER_STREAM_STATUS.errorClosed;
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
