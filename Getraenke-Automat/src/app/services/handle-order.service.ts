import { Injectable } from '@angular/core';
import { TextFieldVerifierService } from './text-field-verifier.service';
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
    private textFieldVerifierService: TextFieldVerifierService,
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
   * Überprüft, ob gültige Eingabewerte eingegeben wurden.
   */
  verifyOrder(paidAmount: number, compartmentID: string) {
    const isValidId = this.textFieldVerifierService.validID(compartmentID);
    if (!isValidId){
      const errorMsg = 'Keine gültige Getränke-ID'
        this.customerMessageService.setCustomerMessage(errorMsg);
        throw new Error(errorMsg);
    }
    const beverageCompartment = parseInt(compartmentID);
    const available = this.beverageOrderService.checkAvailability(beverageCompartment);
    if (!available) {
      const errorMsg = 'Das Getränk ist leider ausverkauft';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
    if (paidAmount > 0) {
      this.updateCashRegistry(paidAmount, beverageCompartment)
    } else {
      this.customerMessageService.setCustomerMessage('Kein Geld eingeworfen');
    }
  }

  /**
   * Überprüft, ob genug Geld eingeworfen wurde und aktualisiert die Kasse.
   */
  updateCashRegistry(paidAmount: number, beverageCompartment: number){
    const price = this.beverageOrderService.getBeveragePrice(beverageCompartment);
    const change = this.cashRegisterService.calculateChange(paidAmount, price, this.cashRegister);
    this.cashRegister = this.cashRegisterService.calculateCashRegistryChange(price, this.cashRegister);
    this.setOrder(beverageCompartment, change)
  }

  /**
   * Leitet die gültige Bestellung an die Ausgabe weiter.
   */
  setOrder(beverageCompartment: number, change: number){
    this.beverageOutputService.setOrder(change, beverageCompartment);
    this.beverageQuantityService.updateQuantity(beverageCompartment);

    this.customerMessageService.setCustomerMessage('Vielen Dank für ihren Einkauf');
  }
}
