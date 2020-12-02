import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const PIZZA_TEMPLATES: PizzaData[] = [
  {
    name: 'Pepperoni',
    toppings: { 104: true, 105: true },
    selectedSauce: 1000,
  },

  {
    name: 'Hawaii',
    toppings: { 108: true, 109: true, 111: true, 112: true },
    selectedSauce: 2000,
  },

  {
    name: 'Extra Spicy',
    toppings: { 100: true, 101: true, 103: true },
    selectedSauce: 3000,
  },
];

interface ToppingsMap {
  [id: number]: boolean;
}

export interface PizzaData {
  name: string;
  toppings: ToppingsMap;
  selectedSauce: number;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaTemplatesService {

  public readonly NONE: PizzaData = { name: 'None', toppings: {}, selectedSauce: null };

  constructor() { }

  getPizzaTemplates$(): Observable<PizzaData[]> {
    return of(PIZZA_TEMPLATES).pipe(
      delay(1600)
    );
  }
}
