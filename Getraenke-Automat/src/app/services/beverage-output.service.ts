import { Injectable } from '@angular/core';
import { Beverage } from '../beverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageOutputService {
  change?: number;
  beverage?: Beverage;

  constructor() { }
}
