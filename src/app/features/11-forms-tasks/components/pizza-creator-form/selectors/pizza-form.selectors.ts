import { PizzaData } from '../../../services/pizza-templates.service';
import { toppingsDict } from '../../../dictionaries/toppings.dict';

export const toPizzaFormValue = (template: PizzaData) => {
  const formValue = {
    ...template,
    toppings: toppingsDict.map(({ id }) => !!template.toppings[id])
  };
  return formValue;
};
