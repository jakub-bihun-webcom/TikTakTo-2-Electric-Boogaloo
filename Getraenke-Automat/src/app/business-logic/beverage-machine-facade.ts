import { CashRegister } from '../classes/cash-register';
import { DisplayMessage } from '../classes/display-message';
import { NumberPad } from '../classes/number-pad';
import { Beverage2 } from './beverage2';
import { Refills } from './refills';
import { Beverage } from '../beverage';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  public beverage: Beverage2;
  public numberPad: NumberPad;
  public displayMessage: DisplayMessage;
  public cashRegister: CashRegister;
  constructor() {
    this.beverage = new Beverage2();
    this.numberPad = new NumberPad();
    this.displayMessage = new DisplayMessage();
    this.cashRegister = new CashRegister();
  }

  fillUp(refills: Refills): void {}

  insertMoney(money: number): void {
    this.cashRegister.recieveMoney(money);
    const paidAmount = this.cashRegister.getPaidAmount();
    this.displayMessage.setPaidAmountMessage(paidAmount);
  }

  readInsertedMoney(): string {
    const insertedMoney = this.cashRegister.getPaidAmount();
    this.displayMessage.setPaidAmountMessage(insertedMoney);
    return this.displayMessage.getPaidAmountMessage();
  }

  order(compartmentId: number): void {
    const paidAmount = this.cashRegister.getPaidAmount();
  }

  getChange(): number {
    return 0;
  }

  cancelOrder(): void {

  }

  readDisplay(): string {
    // this.displayMessage.setMessage('Bitte Bestellvorgang starten');
    return this.displayMessage.getCustomerMessage();
  }

  takeBeverages(): Beverage[] {
    return [];
  }
}
