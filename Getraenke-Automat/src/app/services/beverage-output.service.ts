import { Injectable } from '@angular/core';
import { BeverageOrderService } from './beverage-order.service';
import { BehaviorSubject } from 'rxjs';
import { CashRegisterService } from './cash-register.service';

@Injectable({
  providedIn: 'root'
})
export class BeverageOutputService {
  orderOutput = new BehaviorSubject<{ change: number; beverageName: string }>({
    change: 0,
    beverageName: ''
  });

  constructor(private beverageOrderService: BeverageOrderService, private cashRegisterService: CashRegisterService) {}

  setOrder(change: number, beverageID: number) {
    const name = this.beverageOrderService.getBeverageName(beverageID);
    this.orderOutput.next({
      change: this.addChange(change),
      beverageName: name + ' ' + this.orderOutput.getValue().beverageName
    });
  }

  returnMoney(change: number) {
    this.orderOutput.next({
      change: this.addChange(change),
      beverageName: this.orderOutput.getValue().beverageName
    });
  }

  resetOrderOutputState() {
    this.orderOutput.next({
      change: 0,
      beverageName: ''
    });
  }

  private addChange(change: number): number {
    const money = change + this.orderOutput.getValue().change;
    return this.cashRegisterService.roundMoneyToFiveCents(money);
  }
}
