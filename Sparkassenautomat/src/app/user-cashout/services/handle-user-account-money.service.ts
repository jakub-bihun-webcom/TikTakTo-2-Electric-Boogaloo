import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleUserAccountMoneyService {
  private ATMAccountMoney: number = 10000;
  private userAccountMoney: number = 3600;
  constructor() {}

  handleUserAccountMoney(amount: number) {
    return (this.userAccountMoney -= amount);
  }

  getATMAccountMoney(amount: number) {
    return (this.ATMAccountMoney -= amount);
  }
}
