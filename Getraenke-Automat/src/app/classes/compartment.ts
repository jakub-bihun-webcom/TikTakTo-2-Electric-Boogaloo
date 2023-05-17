import { Beverage2 } from './beverage2';

export class Compartment {
  public price: number;
  public name: string;
  public beverages: Beverage2[];

  constructor(price: number, beverages: Beverage2[], name: string) {
    this.price = price;
    this.beverages = beverages;
    this.name = name;
  }
}
