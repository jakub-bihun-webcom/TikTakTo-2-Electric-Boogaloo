import { Injectable } from '@angular/core';
import { CustomerOutputComponent } from '../output-customer/customer-output.component';
import { BeverageOrderService } from './beverage-order.service';
import { BehaviorSubject } from 'rxjs';

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
  ) {}

  setOrder(change: number, beverageID: number) {
    const name = this.beverageOrderService.getBeverageName(beverageID);
    this.setOrderOutput(name, change);
  }

  setOrderOutput(name: string, change: number) {
    this.orderOutput.next({
      change: change + this.orderOutput.getValue().change,
      beverageName: this.orderOutput.getValue().beverageName + ' ' + name
    });
  }

  returnMoney(value: number) {
    this.orderOutput.next({
      change: value + this.orderOutput.getValue().change,
      beverageName: this.orderOutput.getValue().beverageName
    })
  }

  resetOrderOutputState() {
    this.orderOutput.next({
      change: 0,
      beverageName: ''
    });
  }
}
