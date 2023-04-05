import { Injectable } from '@angular/core';
import { CustomerMessageService } from './customer-message.service';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {
  constructor(private customerMessageService: CustomerMessageService) {}

  calculateChange(inputMoney: number, priceBeverage: number, registry: number): number {
    const change = inputMoney - priceBeverage;
    if (change < 0) {
      const errorMsg = 'Nicht genug Geld eingeworfen';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
    if (change > registry) {
      const errorMsg = 'Nicht genug Wechselgeld im Automaten';
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
    return change;
  }

  calculateRegistryChange(price: number, registry: number): number {
    return registry + price;
  }
}
