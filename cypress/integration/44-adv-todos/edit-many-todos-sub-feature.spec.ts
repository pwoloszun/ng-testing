import * as faker from 'faker';

import { Todo } from '@api/todos.service';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: edit many Todos sub-feature', () => {

  xit('should be possible to edit and then cancel those changes instead of saving them', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    cy.visit('/adv-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const index = 3;
        const todoDuringEdition = todos[index];

        // TODO: find list item and click 'Edit'

        // inside our list item:
        //    - find text field 'Title' and fill with new title
        //    - find text field 'Description' and fill with new title
        //    - click 'Cancel' btn
        //    - then assert all of: text fields and 'Save'/'Cancel' buttons disappear AND
        //    - assert original Todos: title & description are rendered AND
        //    - assert 'Edit' & 'Remove' btns are rendered
      });
  });

  xit('should be able to edit many Todos simultaneously', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    cy.visit('/adv-todos');
    cy.wait('@getTodosRequest');

    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const indices = [1, 2, 5];

        // TODO: one by one, click 'Edit' on many buttons

        // TODO: for every item list containing editing button, check if proper text fields & buttons appear
      });
  });

});
