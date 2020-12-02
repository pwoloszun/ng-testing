import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';

import { countriesDict } from '../../dictionaries/countries.dict';
import { getInterestsByType$, interestTypesDict } from '../../dictionaries/interests.dict';

@Component({
  selector: 'nts-my-form-validation-task',
  templateUrl: './my-form-validation-task.component.html',
  styleUrls: ['./my-form-validation-task.component.css']
})
export class MyFormValidationTaskComponent implements OnInit {

  allCountries = countriesDict;
  allInterestTypes = interestTypesDict;

  selectedInterestsMap = {};

  availableInterestLabels = [];

  myForm = this.formBuilder.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    age: [null, [Validators.required, Validators.min(7)]],

    areDetailsEnabled: [false],
    height: [null],

    country: [null, Validators.required],

    selectedInterestType: [null],
    availableInterests: this.formBuilder.array([]),

  });

  get areDetailsEnabledControl(): FormControl {
    return this.myForm.get('areDetailsEnabled') as FormControl;
  }

  get selectedInterestTypeControl(): FormControl {
    return this.myForm.get('selectedInterestType') as FormControl;
  }

  get availableInterestsControls(): AbstractControl[] {
    return (this.myForm.get('availableInterests') as FormArray).controls;
  }

  constructor(private formBuilder: FormBuilder) {
  }

  submitHandler(event) {
    event.preventDefault();
    const { value } = this.myForm;
    value.selectedInterestsMap = this.selectedInterestsMap;
    console.log('form task value', value);
  }

  ngOnInit(): void {
    this.areDetailsEnabledControl.valueChanges.subscribe((areDetailsEnabled) => {
      if (!areDetailsEnabled) {
        this.myForm.get('height').setValue(null);
      }
    });

    this.selectedInterestTypeControl.valueChanges
      .pipe(
        switchMap((interestType) => {
          return getInterestsByType$(interestType);
        })
      )
      .subscribe((interests: string[]) => {
        this.buildAvailableInterests(interests);
      });


    this.myForm.valueChanges
      .pipe(
        map((formValue) => formValue.availableInterests),
      )
      .subscribe((selected: boolean[]) => {
        this.availableInterestLabels.forEach((interest, i) => {
          this.selectedInterestsMap[interest] = selected[i];
        });
      });
  }

  buildAvailableInterests(interests: string[]) {
    this.availableInterestLabels = interests;
    const selectedValues = interests.map((interest) => {
      return this.formBuilder.control(!!this.selectedInterestsMap[interest]);
    });
    this.myForm.setControl('availableInterests', this.formBuilder.array(selectedValues));
  }
}
