import { Topping, toppingsDict } from '../../dictionaries/toppings.dict';

interface SelectedToppingsMap {
  [id: number]: boolean;
}

export class PizzaDTO {
  name: string;
  doughThickness: number;
  toppings: SelectedToppingsMap;
  sauce: number;

  constructor(formValue: RawPizzaFormValue) {
    this.name = formValue.name;
    this.doughThickness = formValue.doughThickness;
    this.sauce = formValue.selectedSauce;
    this.toppings = toppingsDict.reduce((memo, topping: Topping, i: number) => {
      const { id } = topping;
      const isSelected = formValue.toppings[i];
      memo[id] = isSelected;
      return memo;
    }, {});
  }
}

export interface RawPizzaFormValue {
  name: string;
  doughThickness: number;
  toppings: boolean[];
  selectedSauce: number;
}
