import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleUserAccountMoneyService {
  private ATMAccountMoney: number = 10000;
  private userAccountMoney?: number;

  constructor() {}

  handleUserAccountMoney(amount: number) {
    if (this.userAccountMoney === undefined) {
      throw new Error('User account money not set');
    }
    this.userAccountMoney -= amount;
    return this.userAccountMoney;
  }

  setUserAccountMoney(amount: number) {
    this.userAccountMoney = amount;
  }

  getATMAccountMoney (amount: number) {
    if (this.ATMAccountMoney+1 <= amount) {
      console.log(this.ATMAccountMoney)
      return false
    } else {
      this.ATMAccountMoney -= amount
      return true
    }
  }
}
