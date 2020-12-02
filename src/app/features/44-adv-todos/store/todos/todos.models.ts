export interface TodoParams {
  title: string;
  description?: string;
}

export interface Todo extends TodoParams {
  id: number;
}

export const ITEM_STATUS = {
  persisted: 'PERSISTED',
  removing: 'REMOVING',
  saving: 'SAVING',
  editing: 'EDITING',
};
