import { Injectable } from '@angular/core';
import { BeverageChoiceVerifierService } from './beverage-choice-verifier.service';
import { BeverageOrderService } from './beverage-order.service';
import { BeverageOutputService } from './beverage-output.service';
import { CashRegisterService } from './cash-register.service';
import { CustomerMessageService } from './customer-message.service';
import { BeverageQuantityService } from './beverage-quantity.service';

@Injectable({
  providedIn: 'root'
})
export class HandleOrderService {
  constructor(
    private beverageChoiceVerifierService: BeverageChoiceVerifierService,
    private beverageOrderService: BeverageOrderService,
    private customerMessageService: CustomerMessageService,
    private cashRegisterService: CashRegisterService,
    private beverageOutputService: BeverageOutputService,
    private beverageQuantityService: BeverageQuantityService
  ) {}

  /**
   * Repräsentiert die Kasse des Getränkeautomaten.
   */
  cashRegister: number = 100;

  /**
   * Überprüft, ob gültige Eingabewerte eingegeben wurden und informiert den Kunden sollte die Bestellung nicht gültig sein.
   * Bei einer gültigen Bestellung wird die Bestellung weiter vorangetrieben.
   */
  handleOrder(paidAmount: number, compartmentID: string): boolean {
    const isValidID = this.beverageChoiceVerifierService.isValidID(compartmentID);
    if (!isValidID) {
      this.customerMessageService.setCustomerMessage('Keine gültige Getränke-ID');
      return false;
    }
    const beverageCompartment = parseInt(compartmentID);
    const available = this.beverageOrderService.checkAvailability(beverageCompartment);
    if (!available) {
      this.customerMessageService.setCustomerMessage('Das Getränk ist leider ausverkauft');
      return false;
    }
    if (paidAmount === 0) {
      this.customerMessageService.setCustomerMessage('Kein Geld eingeworfen');
      return false;
    } else {
      this.updateCashRegistry(paidAmount, beverageCompartment);
      return true;
    }
  }

  /**
   * Überprüft, ob genug Geld eingeworfen wurde und aktualisiert die Kasse.
   */
  private updateCashRegistry(paidAmount: number, beverageCompartment: number) {
    const price = this.beverageOrderService.getBeveragePrice(beverageCompartment) as number;
    const change = this.cashRegisterService.calculateChange(paidAmount, price, this.cashRegister);
    this.cashRegister = this.cashRegisterService.calculateCashRegisterChange(price, this.cashRegister);
    this.setOrder(beverageCompartment, change);
  }

  /**
   * Leitet die gültige Bestellung an die Ausgabe weiter.
   */
  private setOrder(beverageCompartment: number, change: number) {
    this.beverageOutputService.setOrder(change, beverageCompartment);
    this.beverageQuantityService.reduceQuantityByOne(beverageCompartment);

    this.customerMessageService.setCustomerMessage('Vielen Dank für ihren Einkauf');
  }
}
