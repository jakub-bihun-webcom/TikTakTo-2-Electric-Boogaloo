import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCashOutManager {
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

  processATMAccountMoney(amount: number): boolean {
    if (this.ATMAccountMoney + 1 <= amount) {
      return false;
    } else {
      this.ATMAccountMoney -= amount;
      return true;
    }
  }
}
