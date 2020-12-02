import { getMainPageContentAs } from '../helpers';

describe('Component Basics page', () => {
  describe('ui', () => {
    xit('should render single hello world', () => {
      // TODO: find el by text
      // TODO: check existance

      // TODO refactor:
      // - check visibility + GOTCHA
      // - scoped search
    });

    xit('should render single personal data', () => {
      // TODO
    });

    xit('should render running clock', () => {
      const now = new Date(Date.UTC(1996, 2, 25, 6, 37, 9)).getTime();
      // TODO: stub time

      // TODO: assert rendered time is: '1996-03-25 06:37:09'

      // TODO: move "forward" 2h, 4mins, 3sec and assert rendered time is: '1996-03-25 08:41:12'
    });
  });

  describe('navigation', () => {
    xit('should navigate to component basics page', () => {
      cy.visit('/props-events');

      // TODO: find navigation

      // TODO: "manually" navigate using main nav link

      // TODO: check browser url
    });
  });
});
