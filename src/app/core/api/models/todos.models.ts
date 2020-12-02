export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export const ITEM_STATUS = {
  persisted: 'PERSISTED',
  removing: 'REMOVING',
  saving: 'SAVING',
  editing: 'EDITING',
};
