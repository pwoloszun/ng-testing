import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ITEM_STATUS } from '../../store/todos/todos.models'; // TODO: inject as input

const disabledStatuses = [
  ITEM_STATUS.saving,
  ITEM_STATUS.removing,
  ITEM_STATUS.editing,
];

interface Item {
  title: string;
  description?: string;
}

@Component({
  selector: 'nts-my-list-item',
  templateUrl: './my-list-item.component.html',
  styleUrls: ['./my-list-item.component.css']
})
export class MyListItemComponent<T extends Item> {

  @Input() item: T;
  @Input() status: string;

  @Output() remove = new EventEmitter<T>();
  @Output() edit = new EventEmitter<T>();
  @Output() saveEdit = new EventEmitter<{ item: T, data: Partial<T> }>();
  @Output() cancelEdit = new EventEmitter<T>();

  statusLabels = {
    [ITEM_STATUS.saving]: 'Saving...',
    [ITEM_STATUS.removing]: 'Removing...',
  };

  handleRemove() {
    this.remove.emit(this.item);
  }

  handleEdit() {
    this.edit.emit(this.item);
  }

  handleSaveEdit(params) {
    this.saveEdit.emit(params);
  }

  handleCancelEdit() {
    this.cancelEdit.emit(this.item);
  }

  isEditing() {
    return this.status === ITEM_STATUS.editing;
  }

  isDisabled() {
    return disabledStatuses.includes(this.status);
  }
}
