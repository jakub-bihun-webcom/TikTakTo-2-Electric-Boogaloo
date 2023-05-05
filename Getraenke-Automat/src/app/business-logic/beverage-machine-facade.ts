import { Refills } from './refills';
import { Beverage } from '../beverage';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  constructor() {}

  fillUp(refills: Refills): void {}

  insertMoney(money: number): void {}

  readInsertedMoney(): string {
    return '';
  }

  order(compartmentId: number): void {}

  getChange(): number {
    return 0;
  }

  cancelOrder(): void {}

  readDisplay(): string {
    return '';
  }

  takeBeverages(): Beverage[] {
    return [];
  }
}
