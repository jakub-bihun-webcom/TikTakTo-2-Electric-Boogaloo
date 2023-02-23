import { Injectable } from '@angular/core';
import { CostumerMessageService } from './costumer-message.service';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {
  constructor(private costumerMessageService: CostumerMessageService) {}

  calculateChange(inputMoney: number, priceBeverage: number, registry: number): number {
    const change = inputMoney - priceBeverage;
    if (change < 0) {
      const errorMsg = 'Nicht genug Geld eingeworfen';
      // this.costumerMessageService.setCostumerMessage(errorMsg)
      throw new Error(errorMsg);
    }
    if (change > registry) {
      throw new Error('Nicht genug Wechselgeld!');
    }
    return change;
  }

  calculateRegistryChange(price: number, registry: number): number {
    return registry + price;
  }
}
