describe('fixtures, routes stubbing examples ', () => {

  it('should stub route with some data', () => {
    cy.intercept({
      method: 'GET',
      pathname: '/api/todos',
    }, {
      body: [
        { id: 1, title: 'buy cat!' }
      ],
    }).as('getTodosRequest');

    cy.visit('/advanced-todos');
    cy.wait('@getTodosRequest')
      .then((intercepted) => {
        // const { request, response } = intercepted;
        const actualTodos = intercepted.response.body;
        expect(actualTodos).to.have.length(1);
        expect(actualTodos[0].id).to.equal(1);
      });

  });

  it('should stub route using fixtures', () => {
    const todosJsonFixturePath = '44-adv-todos/todos.json';
    cy.fixture(todosJsonFixturePath)
      .as('todosJSON');

    cy.intercept({
      method: 'GET',
      pathname: '/api/todos',
    }, {
      fixture: todosJsonFixturePath,
    }).as('getTodosRequest');

    cy.visit('/advanced-todos');

    cy.wait('@getTodosRequest')
      .then((intercepted) => {
        cy.get('@todosJSON')
          .then((todosJson) => {
            expect(intercepted.response.body).to.deep.equals(todosJson);
          });
      });

  });
});
