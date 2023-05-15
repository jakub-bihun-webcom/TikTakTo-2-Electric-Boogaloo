import { CashRegister } from '../classes/cash-register';
import { DisplayMessage } from '../classes/display-message';
import { NumberPad } from '../classes/number-pad';
import { Refills } from './refills';
import { Beverage } from '../beverage';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  public numberPad: NumberPad;
  public displayMessage: DisplayMessage;
  public cashRegister: CashRegister;
  constructor() {
    this.numberPad = new NumberPad();
    this.displayMessage = new DisplayMessage();
    this.cashRegister = new CashRegister();
  }

  fillUp(refills: Refills): void {}

  insertMoney(money: number): void {
    this.cashRegister.receiveMoney(money);
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
    const paidAmount = this.cashRegister.getPaidAmount();

    return 0;
  }

  cancelOrder(): void {}

  readDisplay(): string {
    // this.displayMessage.setMessage('Bitte Bestellvorgang starten');
    return this.displayMessage.getCustomerMessage();
  }

  takeBeverages(): Beverage[] {
    return [];
  }
}
