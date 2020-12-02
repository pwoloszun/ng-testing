import { render, waitFor } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { MyCounterComponent } from './my-counter.component';

async function renderMyCounter(value: number) {
  return render(MyCounterComponent, {
    componentProperties: {
      value,
    },
  });
}

describe('MyCounterComponent', () => {
  it('should render with initial value', async () => {
    const { findByTestId } = await renderMyCounter(10);

    const valueTextEl = await findByTestId('counter-value');
    expect(valueTextEl.textContent).toContain('10');
  });

  it('should async increment value', async () => {
    const { findByTestId, findByText } = await renderMyCounter(10);

    const incrementBtnEl = await findByText('Increment');

    userEvent.click(incrementBtnEl);

    // TODO: async variant
    const valueTextEl = await findByTestId('counter-value');
    expect(valueTextEl.textContent).toContain('11');
  });

});
