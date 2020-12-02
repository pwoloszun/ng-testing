import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'nts-my-simple-form',
  templateUrl: './my-simple-form.component.html',
  styleUrls: ['./my-simple-form.component.css']
})
export class MySimpleFormComponent {

  myForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(3)]],

    primaryAddress: this.formBuilder.group({
      city: [''],
      street: [''],
    }),

    emailsFrequency: [''],

    isAgreementConfirmed: [false, Validators.required],
  });

  cities = [
    { label: 'Lublin', value: 'lublin' },
    { label: 'Warszawa', value: 'warsaw' },
    { label: 'Kraków', value: 'cracow' },
    { label: 'Częstochowa', value: 'czestochowa' },
    { label: 'Gliwice', value: 'gliwice' },
    { label: 'Zielona Góra', value: 'zielona-gora' },
  ];

  emailsFrequencyOptions = [
    { label: 'Every week', value: 'weekly' },
    { label: 'Every month', value: 'monthly' },
    { label: 'No emails', value: 'never' },
  ];

  constructor(private formBuilder: FormBuilder) {
  }

  submitHandler(event) {
    event.preventDefault();
    console.log('simple form value', this.myForm.value);
  }

}
