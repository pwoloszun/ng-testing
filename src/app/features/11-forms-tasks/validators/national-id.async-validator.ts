import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormArray, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NationalIdAsyncValidator implements AsyncValidator {

  constructor() {
    // HERE you can inject ng service
  }

  validate(nationalIdCtrl: FormControl): Observable<ValidationErrors | null> {
    const nationalId: string = nationalIdCtrl.value;
    const parts = nationalId.match(/^\d{2}(\d{2})\d{2}/);
    let result = null;
    if (!parts) {
      result = { nationalId: { invalidFormat: true } };
    } else {
      const month = parseInt(parts[1]);
      if (month > 12) {
        result = { nationalId: { invalidMonth: month } };
      }
    }

    return of(result).pipe(
      delay(1200),
    );
  }
}
