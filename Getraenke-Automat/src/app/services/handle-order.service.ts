import { Injectable } from '@angular/core';
import { VerifyInputService } from './verify-input.service';
import { BeverageOrderService } from './beverage-order.service';
import { BeverageOutputService } from './beverage-output.service';
import { CashRegisterService } from './cash-register.service';
import { CustomerMessageService } from './customer-message.service';
import { UpdateBeverageQuantityService } from './update-beverage-quantity.service';

@Injectable({
  providedIn: 'root'
})
export class HandleOrderService {
  constructor(
    private verifyInputService: VerifyInputService,
    private beverageOrderService: BeverageOrderService,
    private customerMessageService: CustomerMessageService,
    private cashRegisterService: CashRegisterService,
    private beverageOutputService: BeverageOutputService,
    private updateBeverageQuantity: UpdateBeverageQuantityService
  ) {}

  /**
   * Repräsentiert die Kasse des Getränkeautomaten.
   */
  registry: number = 100;

  /**
   * Überprüft, ob gültige Eingabewerte eingegeben wurden.
   */
  verifyOrder(paidAmount: number, inputField: string) {
    this.verifyInputService.validID(inputField);
    const beverageCompartment = parseInt(inputField);
    const available = this.beverageOrderService.checkAvailability(beverageCompartment);
    if (!available) {
      const errorMsg = 'Das Getränk ist leider ausverkauft';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
    if (paidAmount > 0) {
      this.updateRegistry(paidAmount, beverageCompartment)
    } else {
      this.customerMessageService.setCustomerMessage('Kein Geld eingeworfen');
    }
  }

  /**
   * Überprüft, ob genug Geld eingeworfen wurde und aktualisiert die Kasse.
   */
  updateRegistry(paidAmount: number, beverageCompartment: number){
    const price = this.beverageOrderService.getBeveragePrice(beverageCompartment);
    const change = this.cashRegisterService.calculateChange(paidAmount, price, this.registry);
    this.registry = this.cashRegisterService.calculateRegistryChange(price, this.registry);
    this.setOrder(beverageCompartment, change)
  }

  /**
   * Leitet die gültige Bestellung an die Ausgabe weiter.
   */
  setOrder(beverageCompartment: number, change: number){
    this.beverageOutputService.setOrder(change, beverageCompartment);
    this.updateBeverageQuantity.updateQuantity(beverageCompartment);

    this.customerMessageService.setCustomerMessage('Vielen Dank für ihren Einkauf');
  }
}
