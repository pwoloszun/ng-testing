import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import { toppingsDict } from '../../dictionaries/toppings.dict';
import { doughThicknessDict, DoughThickness } from '../../dictionaries/dough-thickness.dict';
import { pizzaSauceDict } from '../../dictionaries/sauces.dict';
import { PizzaDTO } from './dtos/pizza.dto';
import { PizzaTemplatesService, PizzaData } from '../../services/pizza-templates.service';
import { Observable } from 'rxjs';
import { toPizzaFormValue } from './selectors/pizza-form.selectors';
import { PizzaQualityValidator } from '../../validators/pizza-quality.validator';
import { toppingsValidator } from '../../validators/toppings.validator';

@Component({
  selector: 'nts-pizza-creator-form',
  templateUrl: './pizza-creator-form.component.html',
  styleUrls: ['./pizza-creator-form.component.css']
})
export class PizzaCreatorFormComponent implements OnInit {
  // dictionaries
  availableDoughThickness = doughThicknessDict;
  availableToppings = toppingsDict;
  availableSauces = pizzaSauceDict;

  // form
  pizzaForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    doughThickness: [this.availableDoughThickness[0].id, [Validators.required, Validators.min(7)]],
    toppings: this.buildToppingsArrayCtrl(),
    selectedSauce: [this.availableSauces[0].id],

    extras: new FormArray([], [this.qualityValidator.validate]),
    pizzaTemplate: [this.pizzaTemplatesService.NONE]
  });

  // helpers
  get toppingsArrayCtrl(): FormArray {
    return this.pizzaForm.get('toppings') as FormArray;
  }

  get extrasArrayCtrl(): FormArray {
    return this.pizzaForm.get('extras') as FormArray;
  }

  get pizzaTemplateCtrl(): FormControl {
    return this.pizzaForm.get('pizzaTemplate') as FormControl;
  }

  pizzaTemplates$: Observable<PizzaData[]>;

  constructor(
    private formBuilder: FormBuilder,
    private pizzaTemplatesService: PizzaTemplatesService,
    private qualityValidator: PizzaQualityValidator
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.fetchPizzaTemplates();
  }

  submitHandler() {
    const dto = new PizzaDTO(this.pizzaForm.value);
    console.log('form task DTO value', dto);
  }

  createExtra() {
    this.extrasArrayCtrl.push(new FormControl(''));
  }

  removeExtra(index: number) {
    this.extrasArrayCtrl.removeAt(index);
  }

  private initForm() {
    this.pizzaTemplateCtrl.valueChanges.subscribe((template: PizzaData) => {
      const formValue = toPizzaFormValue(template);
      this.pizzaForm.patchValue(formValue);
    });
  }

  private fetchPizzaTemplates() {
    this.pizzaTemplates$ = this.pizzaTemplatesService.getPizzaTemplates$().pipe(
      map((templates) => [this.pizzaTemplatesService.NONE, ...templates]),
      startWith([this.pizzaTemplatesService.NONE]),
    );
  }

  private buildToppingsArrayCtrl(): FormArray {
    const toppingCtrls = this.availableToppings.map((topping) => {
      return this.formBuilder.control(false);
    });
    return this.formBuilder.array(toppingCtrls, [toppingsValidator(2)]);
  }
}
