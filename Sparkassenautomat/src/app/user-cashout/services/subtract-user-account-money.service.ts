import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class subtractUserAccountMoney {
  private ATMAccountMoney: number = 10000;
  private userAccountMoney?: number;

  subtractUserAccountMoney(amount: number) {
    if (this.userAccountMoney === undefined) {
      throw new Error('User account money not set');
    }
    this.userAccountMoney -= amount;
    return this.userAccountMoney;
  }

  setUserAccountMoney(amount: number) {
    this.userAccountMoney = amount;
  }

  processATMAccountMoney(amount: number) {
    if (this.ATMAccountMoney + 1 <= amount) {
      return [0, this.ATMAccountMoney];
    } else {
      this.ATMAccountMoney -= amount;
      return [1];
    }
  }
}
