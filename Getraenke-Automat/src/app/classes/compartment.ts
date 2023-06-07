import { Beverage2 } from './beverage2';

export class Compartment {
  /**
   * Der Preis wird an den Compartments gespeichert und nicht an den Getränken, weil auch eine CompartmentID zum
   * Bestellen ausgewählt wird und nicht ein Getränk.
   */
  private readonly price: number;
  private readonly ID: number;
  private beverages: Beverage2[];

  constructor(price: number, name: number, beverages: Beverage2[]) {
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
    return this.beverages.shift() as Beverage2;
  }

  getID(): number {
    return this.ID;
  }
}
