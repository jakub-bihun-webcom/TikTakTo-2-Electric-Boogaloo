import { Beverage2 } from '../business-logic/beverage2';

export class OutputStorage {
  public change: number = 0;
  public beverages: Beverage2[] = [];

  addChange(change: number): void {
    this.change += change;
  }

  addBeverage(beverage: Beverage2): void {
    this.beverages.push(beverage);
  }

  takeChange(): number {
    const changeStored = this.change;
    this.change = 0;
    return changeStored;
  }

  takeBeverages(): Beverage2[] {
    const beveragesStored = this.beverages;
    this.beverages = [];
    return beveragesStored;
  }
}
