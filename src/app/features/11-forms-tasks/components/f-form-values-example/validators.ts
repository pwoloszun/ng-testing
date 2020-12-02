import { FormGroup, FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { omit, merge, keys } from 'lodash';

import { Country } from '../../dictionaries/countries.dict';

function includeError(errors = {}, newError) {
  return merge(errors, newError);
}

function excludeError(errors: any, errorKey: string) {
  if (errors) {
    const nextErrors = omit(errors, errorKey);
    if (keys(nextErrors).length > 0) {
      return nextErrors;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export const nameCountryValidator: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
  const personalInfoGroup = group.get('personalInfoGroup') as FormGroup;
  const addressGroup = group.get('addressGroup') as FormGroup;

  const fullNameCtrl = personalInfoGroup.get('fullName') as FormControl;
  const countryIdCtrl = addressGroup.get('country') as FormControl;

  const name = fullNameCtrl.value as string;
  const country = countryIdCtrl.value as Country;

  if (country.id === 'PL' && !name.match(/ski/)) {
    const nextPersonalErrors = includeError(personalInfoGroup.errors, { invalidFullNameWithinCountry: true });
    personalInfoGroup.setErrors(nextPersonalErrors);
    const nextAddressErrors = includeError(addressGroup.errors, { invalidFullNameWithinCountry: true });
    addressGroup.setErrors(nextAddressErrors);
    return { invalidFullNameWithinCountry: true };
  } else {
    const nextPersonalErrors = excludeError(personalInfoGroup.errors, 'invalidFullNameWithinCountry');
    personalInfoGroup.setErrors(nextPersonalErrors);
    const nextAddressErrors = excludeError(addressGroup.errors, 'invalidFullNameWithinCountry');
    addressGroup.setErrors(nextAddressErrors);
    return null;
  }
};

export const properNameValidator: ValidatorFn = (personalInfoGroup: FormGroup): ValidationErrors | null => {
  const fullNameCtrl = personalInfoGroup.get('fullName') as FormControl;
  const name = fullNameCtrl.value as string;

  if (!name.match(/^[A-Z]/)) {
    return { invalidName: { startWithCapitalLetter: false } };
  } else {
    return null;
  }
};
