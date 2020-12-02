import { Todo } from '@api/todos.service';

import { stubFetchTodosAs, getTodoListItemsAs } from './helpers';

describe('Adv. Todos page: remove todo sub-feature', () => {

  xit('should indicate todo is removing, and then remove it from list', () => {
    stubFetchTodosAs('getTodosRequest', 'todosJSON');

    // TODO: stub remove Request & stub server response

    cy.visit('/adv-todos');
    cy.wait('@getTodosRequest');
    getTodoListItemsAs('todoListItems');

    cy.get<Todo[]>('@todosJSON')
      .then((todos) => {
        const index = 2;
        const todoToRemove = todos[index];

        // TODO: find list Item by index and click 'Remove' btn

        // TODO: assert list item contains: 'Removing...'

        // TODO: assert list item buttons('Remove', 'Edit') are disabled
      });

    // TODO: wait for server response

    // TODO: check if list is shorter AND does not contain removed todo(by: title, description)
  });

});
