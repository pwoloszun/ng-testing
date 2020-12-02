import { Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PizzaQualityValidator implements AsyncValidator {

  constructor() {
    // HERE you can inject ng service
  }

  validate(extras: FormArray): Observable<ValidationErrors | null> {
    let result = null;
    const extraValues: string[] = extras.value;
    if (extraValues.some((value) => value === 'anchois')) {
      result = { badPizzaQuality: ['should not include anchois'] };
    }
    return of(result).pipe(
      delay(1200),
    );
  }
}
