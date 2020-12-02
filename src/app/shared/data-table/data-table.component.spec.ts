import { merge } from 'lodash';
import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { DataTableComponent } from './data-table.component';

function generateDataTableInputs(inputs = {}): any {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

describe('DataTableComponent', () => {
  describe('@Inputs', () => {
    it('should render row for each item', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();

      const component = await render(DataTableComponent, {
        componentProperties: {
          metaData,
          selectedItem,
          items,
        },
      });
      const itemRows = component.getAllByTestId('item-row');
      expect(itemRows.length).toEqual(items.length);
    });

    it('should sort cells in metaData order', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();

      const component = await render(DataTableComponent, {
        componentProperties: {
          metaData,
          selectedItem,
          items,
        },
      });
      const itemRows = component.getAllByTestId('item-row');
      const actualTexts = itemRows.map((row) => row.textContent.replace(/\s+/g, ' ').trim());
      const expectedTexts = items.map((item) => {
        const sortedValues = metaData.map(({ value }) => item[value]);
        return sortedValues.join(' ');
      });

      expect(actualTexts).toEqual(expectedTexts);
    });

    it('should highlight selected item', async () => {
      const { metaData, items } = generateDataTableInputs();
      const index = 1;
      const selectedItem = items[index];

      const component = await render(DataTableComponent, {
        componentProperties: {
          metaData,
          selectedItem,
          items,
        },
      });

      const selectedRow = component.getAllByTestId('item-row')[index];

      expect(selectedRow.className).toMatch(/highlighted/);
    });

    it('should highlight nothing if selectedItem undefined', async () => {
      const { metaData, items } = generateDataTableInputs();
      const selectedItem = null;

      const component = await render(DataTableComponent, {
        componentProperties: {
          metaData,
          selectedItem,
          items,
        },
      });

      const itemRows = component.getAllByTestId('item-row');
      const rowCssClasses = itemRows.map((row) => row.className).join(' ');

      expect(rowCssClasses).not.toMatch(/highlighted/);
    });
  });

  describe('@Outputs()', () => {
    it('should emit item linked with clicked row', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();
      const index = 1;

      const itemClick = { emit: () => { } };
      spyOn(itemClick, 'emit');

      const component = await render(DataTableComponent, {
        componentProperties: {
          itemClick: itemClick as any,
          metaData,
          selectedItem,
          items,
        },
      });

      const selectedRow = component.getAllByTestId('item-row')[index];
      userEvent.click(selectedRow);

      expect(itemClick.emit).toHaveBeenCalledTimes(1);
      // expect(itemClick.emit).toHaveBeenCalledWith(items[index]);
    });
  });
});

