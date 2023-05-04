import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCashOutManager {
  private ATMAccountMoney: number = 1000;
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

  checkIfWithdrawalIsPossible(amount: number): boolean {
    return this.ATMAccountMoney + 1 > amount;
  }

  withdraw(amount: number) {
    this.ATMAccountMoney -= amount
  }
}