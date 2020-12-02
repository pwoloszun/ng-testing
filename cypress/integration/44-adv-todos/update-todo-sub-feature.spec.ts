import * as faker from 'faker';

import { Todo } from '@api/todos.service';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: update Todo sub-feature', () => {

  xit('should be a optimistic locking update', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    const index = 3;
    const todoChanges = {
      title: faker.lorem.words(3) as string,
      description: faker.lorem.words(6) as string,
    };

    // === stub Update server response
    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const toUpdateTodo = todos[index];
        const nextTodo = {
          ...toUpdateTodo,
          ...todoChanges,
        };

        // TODO: stub "Update Todo" request to return nextTodo as response
      });

    cy.visit('/adv-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    // TODO: find list item by Todo title & click 'Edit' btn

    // === Edit and Save
    // TODO: change title & description & Save

    // === While Saving...
    // TODO: assert:
    //    - edition: text fields & btns should disappear AND
    //    - 'Saving...' & new title & description are visible AND
    //    - 'Edit' & 'Remove' btns should be visible BUT disabled


    // === wait for server response
    cy.wait('@updateTodoRequest');

    // === wait for list rerender
    // GOTCHA TODO: wait until item list is rerendered:
    //    - use waitUntil() command
    //    - updated list item text() should NOT contain 'Saving...'

    // === Successfully Updated
    // TODO: find updated list item, then inside it:
    //    - assert: new title & description are rendered
    //    - assert: 'Edit' &'Remove' btns are rendered AND enabled

  });
});
