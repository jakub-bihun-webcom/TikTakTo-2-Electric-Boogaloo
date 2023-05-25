import { Beverage2 } from './beverage2';

/**
 * Die Klasse repräsentiert ein Getränkefach.
 * Ein Getränkefach besteht aus einem Namen, Preis und Getränken.
 */
export class Compartment {
  public price: number;
  public name: string;
  public beverages: Beverage2[];

  constructor(price: number, name: string, beverages: Beverage2[]) {
    this.price = price;
    this.beverages = beverages;
    this.name = name;
  }
}
