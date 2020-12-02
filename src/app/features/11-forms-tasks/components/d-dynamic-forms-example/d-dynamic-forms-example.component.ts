import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'nts-d-dynamic-forms-example',
  templateUrl: './d-dynamic-forms-example.component.html',
  styleUrls: ['./d-dynamic-forms-example.component.css']
})
export class DDynamicFormsExampleComponent implements OnInit {

  // dictionaries
  availableUserRoles = [
    { id: 100, name: 'user' },
    { id: 200, name: 'su' },
    { id: 300, name: 'root' },
  ];

  // form
  myForm: FormGroup;

  // helpers
  get listNameCtrl(): FormControl {
    return this.myForm.get('listName') as FormControl;
  }

  get userRolesArrayCtrl(): FormArray {
    return this.myForm.get('userRoles') as FormArray;
  }

  get extrasArrayCtrl(): FormArray {
    return this.myForm.get('extras') as FormArray;
  }

  get otherUsersArrayCtrl(): FormArray {
    return this.myForm.get('otherUsers') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  submitHandler() {
    console.log('form value', this.myForm.value);
  }

  createExtra() {
    this.extrasArrayCtrl.push(new FormControl(''));
  }

  removeExtra(index: number) {
    this.extrasArrayCtrl.removeAt(index);
  }

  createOtherUser() {
    const otherUserGroup = this.formBuilder.group({
      name: [''],
      age: [21],
      hasAgreed: [true]
    });
    this.otherUsersArrayCtrl.push(otherUserGroup);
  }

  removeOtherUser(index: number) {
    this.otherUsersArrayCtrl.removeAt(index);
  }

  private initForm() {
    this.myForm = this.formBuilder.group({
      listName: [''],
      userRoles: this.buildUserRolsArrayCtrl(),
      extras: new FormArray([]),
      otherUsers: new FormArray([]),
    });
  }

  private buildUserRolsArrayCtrl(): FormArray {
    const userRolesArr = this.availableUserRoles.map((topping) => {
      return this.formBuilder.control(false);
    });
    return this.formBuilder.array(userRolesArr, [/* some validators */]);
  }

}
