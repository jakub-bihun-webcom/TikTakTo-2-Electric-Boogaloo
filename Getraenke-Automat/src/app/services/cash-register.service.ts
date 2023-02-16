import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CashRegisterService {

  constructor() { }
  // Rückgeld berechnen
  calculateChange(inputMoney: number, priceBeverage: number){
    const change = inputMoney - priceBeverage;
  }

  giveChange(change: number){
  }
}
