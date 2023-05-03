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
  canceledMoney = new BehaviorSubject<number>(0);

  constructor(
    private beverageOrderService: BeverageOrderService,
    private cashRegisterService: CashRegisterService
  ) {}

  setOrder(change: number, beverageID: number) {
    const name = this.beverageOrderService.getBeverageName(beverageID);
    this.setOrderOutput(name, change);
  }

  setOrderOutput(name: string, change: number) {
    this.orderOutput.next({
      change: this.addChange(change),
      beverageName: this.orderOutput.getValue().beverageName + ' ' + name
    });
  }

  returnMoney(change: number) {
    this.orderOutput.next({
      change: this.addChange(change),
      beverageName: this.orderOutput.getValue().beverageName
    })
  }

  resetOrderOutputState() {
    this.orderOutput.next({
      change: 0,
      beverageName: ''
    });
  }

  addChange(change: number): number {
    const money = change + this.orderOutput.getValue().change
    return this.cashRegisterService.roundMoneyToFiveCents(money)
  }
}
