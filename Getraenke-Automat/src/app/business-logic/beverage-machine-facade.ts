import { CashRegister } from '../classes/cash-register';
import { MessageDisplay } from '../classes/message-display';
import { OutputChange } from '../classes/output-change';
import { OutputBeverage } from '../classes/output-beverage';
import { Beverage2 } from '../classes/beverage2';
import { Compartment } from '../classes/compartment';
import { Refills } from './refills';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  public displayMessage: MessageDisplay;
  public cashRegister: CashRegister;
  public outputBeverage: OutputBeverage;
  public outputChange: OutputChange;
  private compartments: Compartment[] = [];

  constructor() {
    this.displayMessage = new MessageDisplay();
    this.cashRegister = new CashRegister();
    this.outputBeverage = new OutputBeverage();
    this.outputChange = new OutputChange();
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

  order(compartmentId: string): void {
    const paidAmount = this.cashRegister.getPaidAmount();
    const compartment = this.compartments.find(obj => obj.ID === compartmentId) as Compartment;
    const price = compartment.getPrice();
    if (price > paidAmount) {
      this.displayMessage.setCustomerMessage('Nicht genug Geld eingeworfen');
      return;
    }
    if (compartment.isEmpty()) {
      this.displayMessage.setCustomerMessage('Getränk nicht verfügbar');
      return;
    }
    this.cashRegister.resetPaidAmount();
    this.cashRegister.updateCashRegister(paidAmount);
    this.displayMessage.setPaidAmountMessage(0);
    this.displayMessage.setStandardCustomerMessage();
    this.outputBeverage.addBeverage(compartment.getBeverage());
    this.outputChange.addChange(paidAmount - price);
  }

  getChange(): number {
    return this.outputChange.removeChange();
  }

  cancelOrder(): void {
    const paidAmount = this.cashRegister.getPaidAmount();
    this.cashRegister.resetPaidAmount();
    this.outputChange.addChange(paidAmount);
  }

  readDisplay(): string {
    return this.displayMessage.getCustomerMessage();
  }

  takeBeverages(): Beverage2[] {
    return this.outputBeverage.removeBeverages();
  }
}
