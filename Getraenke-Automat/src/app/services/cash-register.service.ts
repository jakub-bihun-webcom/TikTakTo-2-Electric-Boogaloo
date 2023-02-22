import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {
  constructor() {}

  calculateChange(inputMoney: number, priceBeverage: number, registry: number): number {
    const change = inputMoney - priceBeverage;
    if (change < 0) {
      throw new Error('Nich genug Geld eingeworfen!');
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
