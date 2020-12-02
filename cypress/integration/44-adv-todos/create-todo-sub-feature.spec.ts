import { stubFetchTodosAs, getTodoListItemsAs, getTodoFormAs, fillFormWithAndSubmit, getModalInfoAs } from './helpers';

describe('Adv. Todos page: create todo sub-feature', () => {

  xit('should render new Todo at the end of list', () => {

    const newTodo = {
      id: 1000000,
      title: 'my next todo title lorem dolorem',
      description: 'my next desc'
    };

    // TODO: create new Todo

    // TODO: assert new Todo has been added at the end of Todos list
  });

  xit('should indicate new Todo is being created', () => {

    const newTodo = {
      id: 1000000,
      title: 'my next todo title lorem dolorem',
      description: 'my next desc'
    };

    // TODO: create Todo
    //    then: snack bar should appear
    //    then: snack bar should disappear
  });

});
