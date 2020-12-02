import { ValidatorFn, FormArray } from '@angular/forms';

export function toppingsValidator(min = 1) {

  const validator: ValidatorFn = (formArray: FormArray) => {

    const ctrlValues = formArray.controls.map(control => control.value);
    const selectedCount = ctrlValues.filter((value) => value === true).length;

    return selectedCount >= min ? null : { toppings: { notEnoughSelected: true } };
  };

  return validator;
}
