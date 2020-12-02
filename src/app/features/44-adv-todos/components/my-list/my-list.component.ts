import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nts-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent<T> {

  @Input() items: T[];
  @Input() statuses: string[];

  @Output() remove = new EventEmitter<T>();
  @Output() edit = new EventEmitter<T>();
  @Output() saveEdit = new EventEmitter<{ item: T, data: Partial<T> }>();
  @Output() cancelEdit = new EventEmitter<T>();

  handleRemove(item) {
    this.remove.emit(item);
  }

  handleEdit(item) {
    this.edit.emit(item);
  }

  handleSaveEdit(params) {
    this.saveEdit.emit(params);
  }

  handleCancelEdit(item) {
    this.cancelEdit.emit(item);
  }
}
