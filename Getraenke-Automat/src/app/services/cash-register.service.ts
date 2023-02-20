import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {
  constructor() {}
  // Rückgeld berechnen
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
}
