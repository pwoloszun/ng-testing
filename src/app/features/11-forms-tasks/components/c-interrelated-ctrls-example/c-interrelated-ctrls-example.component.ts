import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { distinctUntilChanged, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'nts-c-interrelated-ctrls-example',
  templateUrl: './c-interrelated-ctrls-example.component.html',
  styleUrls: ['./c-interrelated-ctrls-example.component.css']
})
export class CInterrelatedCtrlsExampleComponent implements OnInit {

  myForm: FormGroup;

  // helpers
  get dobCtrl(): FormControl {
    return this.myForm.get('dateOfBirth') as FormControl;
  }

  get nationalIdCtrl(): FormControl {
    return this.myForm.get('nationalId') as FormControl;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitHandler() {
    console.log('form value', this.myForm.value);
  }

  private initForm() {
    this.buildForm();
    this.setupFormInteractions();
  }

  private buildForm() {
    this.myForm = this.fb.group({
      dateOfBirth: [''],
      nationalId: [''],
    });
  }

  private setupFormInteractions() {
    this.nationalIdCtrl.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      filter((value) => value.length >= 6),
    ).subscribe((nationalIdValue: string) => {
      const parts = nationalIdValue.match(/^(\d{2})(\d{2})(\d{2})/);
      const dobValue = `19${parts[1]}-${parts[2]}-${parts[3]}`;
      this.dobCtrl.setValue(dobValue);
    });
  }

}
