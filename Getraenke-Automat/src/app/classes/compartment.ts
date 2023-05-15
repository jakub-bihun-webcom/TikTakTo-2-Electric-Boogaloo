import { Beverage2 } from './beverage2';

export class Compartment {
  public price: number;
  public beverages: Beverage2[];

  constructor(price: number, beverages: Beverage2[]) {
    this.price = price;
    this.beverages = beverages;
  }
}
