import { Injectable } from '@angular/core';
import { Beverage } from '../beverage';
import { BeverageOrderService } from './beverage-order.service';

@Injectable({
  providedIn: 'root'
})
export class BeverageOutputService {
  change?: number;
  beverageName?: string;

  constructor(private beverageOrderService: BeverageOrderService) {}

  setOrder(change: number, beverageID: number) {
    this.change = change;
    console.log(beverageID);
    this.beverageName = this.beverageOrderService.getBeverageName(beverageID);
    console.log('output ' + this.beverageName);
  }
}
