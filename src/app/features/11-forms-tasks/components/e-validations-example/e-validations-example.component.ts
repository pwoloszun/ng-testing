import { Component, OnInit } from '@angular/core';
import { defaultNameValidator } from '../../validators/default-name.validator';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { dobNationalIdValidator } from '../../validators/dob-national-id.validator';
import { NationalIdAsyncValidator } from '../../validators/national-id.async-validator';
import { startsWithCapitalLetterValidator } from '../../validators/starts-with-capital-letter.validator';

@Component({
  selector: 'nts-e-validations-example',
  templateUrl: './e-validations-example.component.html',
  styleUrls: ['./e-validations-example.component.css']
})
export class EValidationsExampleComponent implements OnInit {

  myForm: FormGroup;

  // helpers
  get fullNameCtrl(): FormControl {
    return this.myForm.get('fullName') as FormControl;
  }

  get titleCtrl(): FormControl {
    return this.myForm.get('title') as FormControl;
  }

  get dobCtrl(): FormControl {
    return this.myForm.get('dateOfBirth') as FormControl;
  }

  get nationalIdCtrl(): FormControl {
    return this.myForm.get('nationalId') as FormControl;
  }

  constructor(
    private fb: FormBuilder,
    private nationalIdAsyncValidator: NationalIdAsyncValidator
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitHandler() {
    console.log('form value', this.myForm.value);
  }

  private initForm() {
    this.myForm = this.fb.group({
      fullName: ['', [defaultNameValidator]],
      title: ['', [startsWithCapitalLetterValidator]],
      dateOfBirth: ['', Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      nationalId: ['', [
        this.nationalIdAsyncValidator.validate,
        Validators.pattern(/^\d{11}$/)
      ]],
    }, { validators: [dobNationalIdValidator] });
  }
}
