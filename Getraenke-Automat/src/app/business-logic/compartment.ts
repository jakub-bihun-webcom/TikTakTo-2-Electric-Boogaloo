import { Beverage } from '../beverage';

export interface Compartment {
  price: number;
  beverages: Beverage[];
}
