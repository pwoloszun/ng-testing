import {
  render,
  waitForElementToBeRemoved,
  getByRole,
} from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { FormsModule } from '@angular/forms';
import { last } from 'lodash';

import { SharedModule } from '@shared/shared.module';

import { TodosComponent } from './todos.component';
import { TODOS_DATA } from '../../fake-data/todos-data';
import { TodosListComponent } from '../../components/todos-list/todos-list.component';
import { TodosFormComponent } from '../../components/todos-form/todos-form.component';

async function renderTodosComponent() {
  return render(TodosComponent, {
    imports: [
      SharedModule,
      FormsModule,
    ],
    declarations: [
      TodosListComponent,
      TodosFormComponent,
    ],
  });
}

describe('TodosComponent', () => {
  it('should render todos', async () => {
    const expectedTitles = TODOS_DATA.map(({ title }) => title);
    const component = await renderTodosComponent();

    const itemRows = component.getAllByRole('listitem');

    expect(itemRows.length).toEqual(TODOS_DATA.length);
    itemRows.forEach((row, i) => {
      const expectedTitle = expectedTitles[i];
      expect(row.textContent).toMatch(new RegExp(expectedTitle));
    });
  });

  it('should remove todo when remove btn clicked', async (done) => {
    const originalTitles = TODOS_DATA.map(({ title }) => title);
    const originalTodosCount = originalTitles.length;
    const removeIndex = 1;
    const removeTitle = originalTitles[removeIndex];
    const component = await renderTodosComponent();

    const originalItemRows = component.getAllByRole('listitem');
    const rowToRemove = originalItemRows[removeIndex];
    const btn = getByRole(rowToRemove, 'button');

    waitForElementToBeRemoved(() => component.getByText(new RegExp(removeTitle)))
      .then(() => {
        const itemRows = component.getAllByRole('listitem');
        expect(itemRows.length).toEqual(originalTodosCount - 1);
        itemRows.forEach((row) => {
          expect(row.textContent).not.toMatch(new RegExp(removeTitle));
        });
        done();
      });

    userEvent.click(btn);
  });

  it('should create todo when todo form data submitted', async () => {
    const component = await renderTodosComponent();
    const originalTodosCount = component.getAllByRole('listitem').length;

    const titleControl = component.getByTestId('title');
    const descriptionControl = component.getByTestId('description');
    const submitBtn = component.getByText('Submit');

    const expectedTitle = 'some new title';
    const expectedDescription = 'my new desc';
    userEvent.type(titleControl, expectedTitle);
    userEvent.type(descriptionControl, expectedDescription);
    userEvent.click(submitBtn);

    const itemRows = component.getAllByRole('listitem');

    expect(itemRows.length).toEqual(originalTodosCount + 1);
    const lastRow = last(itemRows);
    expect(lastRow.textContent).toMatch(expectedTitle);
  });

});
