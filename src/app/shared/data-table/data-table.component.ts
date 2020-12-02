import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { MetaData } from './meta-data';

@Component({
  selector: 'nts-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent<T> {

  @Input() items: T[];
  @Input() selectedItem: T;
  @Input() metaData: MetaData[];
  @Output() itemClick: EventEmitter<T> = new EventEmitter<T>();

  onRowClick(item: T) {
    this.itemClick.emit(item);
  }

}
