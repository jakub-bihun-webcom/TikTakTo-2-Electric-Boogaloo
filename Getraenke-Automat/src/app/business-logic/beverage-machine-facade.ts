import { CashRegister } from '../classes/cash-register';
import { MessageDisplay } from '../classes/message-display';
import { OutputStorage } from '../classes/output-storage';
import { Beverage2 } from '../classes/beverage2';
import { Compartment } from '../classes/compartment';
import { Refills } from './refills';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  public displayMessage: MessageDisplay;
  public cashRegister: CashRegister;
  public outputStorage: OutputStorage;
  private compartments: Compartment[] = [];

  constructor() {
    this.displayMessage = new MessageDisplay();
    this.cashRegister = new CashRegister();
    this.outputStorage = new OutputStorage();
  }

  fillUp(refills: Refills): void {
    refills.forEach(value => {
      this.compartments.push(value);
    });
  }

  insertMoney(money: number): void {
    this.cashRegister.updatePaidAmount(money);
    const paidAmount = this.cashRegister.getPaidAmount();
    this.displayMessage.setPaidAmountMessage(paidAmount);
  }

  readInsertedMoney(): string {
    return this.displayMessage.getPaidAmountMessage();
  }

  order(compartmentId: number): void {
    const paidAmount = this.cashRegister.getPaidAmount();
    const price = this.compartments[compartmentId - 1].price;
    if (price > paidAmount) {
      this.displayMessage.setCustomerMessage('Nicht genug Geld eingeworfen');
      return;
    }
    if (this.compartments[compartmentId - 1].beverages.length < 1) {
      this.displayMessage.setCustomerMessage('Getränk nicht verfügbar');
      return;
    }
    this.cashRegister.resetPaidAmount();
    this.cashRegister.updateCashRegister(paidAmount);
    this.displayMessage.setPaidAmountMessage(0);
    this.displayMessage.setStandardCustomerMessage();
    const orderedBeverage: Beverage2 = this.compartments[compartmentId - 1].beverages.shift() as Beverage2;
    this.outputStorage.addBeverage(orderedBeverage);
    this.outputStorage.addChange(paidAmount - price);
  }

  getChange(): number {
    return this.outputStorage.removeChange();
  }

  cancelOrder(): void {
    const paidAmount = this.cashRegister.getPaidAmount();
    this.cashRegister.resetPaidAmount();
    this.outputStorage.addChange(paidAmount);
  }

  readDisplay(): string {
    return this.displayMessage.getCustomerMessage();
  }

  takeBeverages(): Beverage2[] {
    return this.outputStorage.removeBeverages();
  }
}
