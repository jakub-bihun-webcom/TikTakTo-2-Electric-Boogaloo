import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageOrderService {
  getBeveragePrice(inputID: number): number {
    return beverageList.filter(beverage => beverage.id === inputID).map(beverage => beverage.price)[0];
  }

  getBeverageName(inputID: number): string {
    return beverageList.filter(beverage => beverage.id === inputID).map(beverage => beverage.name)[0];
  }

  checkAvailability(inputID: number): boolean {
    const availability = beverageList
      .filter(beverage => beverage.id === inputID)
      .map(beverage => beverage.quantity);
    return availability[0] > 0;
  }
}
