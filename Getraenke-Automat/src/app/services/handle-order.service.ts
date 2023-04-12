import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  resetMoneyInput = new BehaviorSubject<number>(0);
  resetInputID = new BehaviorSubject<string>('')
  constructor(
    private verifyInputService: VerifyInputService,
    private beverageOrderService: BeverageOrderService,
    private customerMessageService: CustomerMessageService,
    private cashRegisterService: CashRegisterService,
    private beverageOutputService: BeverageOutputService,
    private updateBeverageQuantity: UpdateBeverageQuantityService
  ) {}

  registry: number = 100;

  getInput(paidAmount: number, inputField: string) {
    this.verifyInputService.validID(inputField);
    const chosenID = parseInt(inputField);
    const available = this.beverageOrderService.checkAvailability(chosenID);
    if (!available) {
      const errorMsg = 'Das Getränk ist leider ausverkauft';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }

    if (paidAmount > 0) {
      const price = this.beverageOrderService.getBeveragePrice(chosenID);
      const change = this.cashRegisterService.calculateChange(paidAmount, price, this.registry);

      this.registry = this.cashRegisterService.calculateRegistryChange(price, this.registry);
      this.beverageOutputService.setOrder(change, chosenID);
      this.updateBeverageQuantity.updateQuantity(chosenID);

      this.customerMessageService.setCustomerMessage('Vielen Dank für ihren Einkauf');
    } else {
      const errorMsg = 'Kein Geld eingeworfen';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
    // this.inputField = '';
    // this.paidAmount = 0;
  }
}
