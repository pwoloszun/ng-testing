import { ValidatorFn, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

function getCtrl(name: string, group: FormGroup): AbstractControl {
  const control = group.get(name);
  if (!control) {
    throw new Error(`Missing '${name}' form control`);
  }
  return control;
}

export const dobNationalIdValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  const dobCtrl = getCtrl('dateOfBirth', group);
  const nationalIdCtrl = getCtrl('nationalId', group);

  const dobValue = (dobCtrl.value as string).replace(/-/g, '').substr(2, 6);
  const nationalIdValue = (nationalIdCtrl.value as string).substr(0, 6);

  if (dobValue !== nationalIdValue) {
    return { dobNotMatchNationalId: true };
  } else {
    return null;
  }
};
