describe('wait-until-example', () => {
  it('should wait for square to resize', () => {
    cy.visit('/testing-tasks/wait-until');

    cy.findByTestId('square')
      .as('square');

    cy.get('@square')
      .then(($el) => {
        const prevHeight = $el.height();
        return cy.get('@square').waitUntil(($elSquare) => {
          const currentHeight = $elSquare.height();
          return currentHeight > prevHeight;
        });
      });

    cy.get('@square')
      .should('contain', 'imba');
  });

  it('should pick date', () => {
    cy.visit('/testing-tasks/wait-until');

    const obj = { foo: 'bar' };
    setTimeout(() => { // asnc NON-ui operation
      obj.foo = 'baz';
    }, 1000);

    cy.wrap(obj)
      .pipe(function getFoo(s) { // retry until
        return s.foo;
      })
      .should('equal', 'baz');
  });
});
