import { Beverage2 } from './beverage2';

export class Compartment {
  private price: number;
  public ID: string;
  public beverages: Beverage2[];

  constructor(price: number, name: string, beverages: Beverage2[]) {
    this.price = price;
    this.beverages = beverages;
    this.ID = name;
  }

  static emptyCompartment(price: number, id: string): Compartment {
    return new Compartment(price, id, []);
  }

  isEmpty(): boolean {
    return this.beverages.length === 0;
  }

  getPrice(): number {
    return this.price;
  }

  getBeverage(): Beverage2 {
    return this.beverages.shift() as Beverage2
  }
}
