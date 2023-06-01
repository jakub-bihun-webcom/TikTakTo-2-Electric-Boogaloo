import { Beverage2 } from './beverage2';

export class Compartment {
  private readonly price: number;
  private readonly ID: string;
  private beverages: Beverage2[];

  constructor(price: number, name: string, beverages: Beverage2[]) {
    this.price = price;
    this.beverages = beverages;
    this.ID = name;
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

  getID(): string {
    return this.ID;
  }
}
