import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { spy } from 'sinon';

import { CounterComponent } from './counter.component';

function dateToTimestamp(dateStr: string): number {
  const regExp = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2}):(\d{2})/;
  const matches = regExp.exec(dateStr);
  const dateParts = matches.slice(1).map((str) => parseFloat(str));
  // dateParts[1] -= 1;
  return Date.UTC.apply(Date, dateParts);
}

function createOutputSpy(): any {
  const emitSpy = spy();
  const output = {
    emit: emitSpy,
  } as any;
  return [output, emitSpy];
}

describe('CounterComponent', () => {
  it('should render passed props', async () => {
    const component = await render(CounterComponent, {
      componentProperties: {
        value: 47,
        updatedAt: dateToTimestamp('2009-03-09 13:21:45'),
      },
    });

    const valueTextEl = component.getByText(/Value/);
    expect(valueTextEl.textContent).toContain('Value: 47');

    const dateTextEl = component.getByText(/Updated/);
    expect(dateTextEl.textContent).toContain('Updated: 13:21:45');
  });

  it('should handle passed events', async () => {
    const [incrementEvEmitter, incSpy] = createOutputSpy();
    const [decrementEvEmitter, decSpy] = createOutputSpy();
    const [resetEvEmitter, resetSpy] = createOutputSpy();

    const component = await render(CounterComponent, {
      componentProperties: {
        increment: incrementEvEmitter,
        decrement: decrementEvEmitter,
        reset: resetEvEmitter,
      },
    });

    const incrementBtn = component.getByText('Increment');
    userEvent.click(incrementBtn);
    expect(incSpy.called).toEqual(true);

    const decrementBtn = component.getByText('Decrement');
    userEvent.click(decrementBtn);
    expect(decSpy.called).toEqual(true);

    const resetBtn = component.getByText('Reset');
    userEvent.click(resetBtn);
    expect(resetSpy.called).toEqual(true);
  });
});
