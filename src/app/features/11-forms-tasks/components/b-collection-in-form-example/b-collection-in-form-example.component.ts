import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { doughThicknessDict } from '../../dictionaries/dough-thickness.dict';
import { toppingsDict } from '../../dictionaries/toppings.dict';
import { pizzaSauceDict } from '../../dictionaries/sauces.dict';
import { PizzaDTO } from './pizza.dto';

@Component({
  selector: 'nts-b-collection-in-form-example',
  templateUrl: './b-collection-in-form-example.component.html',
  styleUrls: ['./b-collection-in-form-example.component.css']
})
export class BCollectionInFormExampleComponent implements OnInit {

  // dictionaries
  availableDoughThickness = doughThicknessDict;
  availableToppings = toppingsDict;
  availableSauces = pizzaSauceDict;

  // form
  pizzaForm: FormGroup;

  // helpers
  get toppingsArrayCtrl(): FormArray {
    return this.pizzaForm.get('toppings') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitHandler() {
    const dto = new PizzaDTO(this.pizzaForm.value);
    console.log('form value', dto);
  }

  private initForm() {
    this.pizzaForm = this.formBuilder.group({
      name: [''],
      doughThickness: [this.availableDoughThickness[0].id],
      toppings: this.buildToppingsArrayCtrl(),
      selectedSauce: [this.availableSauces[0].id],
    });
  }

  private buildToppingsArrayCtrl(): FormArray {
    const toppingCtrls = this.availableToppings.map((topping) => {
      return this.formBuilder.control(false);
    });
    return this.formBuilder.array(toppingCtrls, [/* validators */]);
  }

}
