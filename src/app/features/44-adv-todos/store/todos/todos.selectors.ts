import { map } from 'lodash';
import { createSelector } from '@ngrx/store';

import { todoEntityAdapter, ApplicationState, todosFeatureKey, TodoStatus } from './todos.reducer';
import { ITEM_STATUS } from './todos.models';

const todoAdapterSelectors = todoEntityAdapter.getSelectors();

const selectFeature = (state: ApplicationState) => {
  return state[todosFeatureKey];
};

const selectTodosDomainSlice = createSelector(
  selectFeature,
  (sliceState) => sliceState.todos
);

export const selectTodosIds = createSelector(
  selectTodosDomainSlice,
  todoAdapterSelectors.selectIds,
);

export const selectTodosEntities = createSelector(
  selectTodosDomainSlice,
  todoAdapterSelectors.selectEntities,
);

export const selectTodosAll = createSelector(
  selectTodosDomainSlice,
  todoAdapterSelectors.selectAll,
);

export const selectTodosIsFetchingMany = createSelector(
  selectFeature,
  (state) => state.isFetchingMany,
);

const selectTodosStatusesMap = createSelector(
  selectFeature,
  (state) => state.todosStatuses,
);

export const selectTodosStatusesAll = createSelector(
  selectTodosIds,
  selectTodosStatusesMap,
  (ids, statusesMap) => {
    return map(ids, (id: number) => {
      const status = statusesMap[id];
      if (status === TodoStatus.Removing) {
        return ITEM_STATUS.removing;
      } else if (status === TodoStatus.Editing) {
        return ITEM_STATUS.editing;
      } else if (status === TodoStatus.Saving) {
        return ITEM_STATUS.saving;
      } else { // persisted or null
        return ITEM_STATUS.persisted;
      }
    });
  },
);
