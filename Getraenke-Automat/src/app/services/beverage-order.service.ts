import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageOrderService {
  getBeveragePrice(compartmentID: number): number {
    return beverageList.filter(beverage => beverage.id === compartmentID).map(beverage => beverage.price)[0];
  }

  getBeverageName(compartmentID: number): string {
    return beverageList.filter(beverage => beverage.id === compartmentID).map(beverage => beverage.name)[0];
  }

  checkAvailability(compartmentID: number): boolean {
    const availability = beverageList.filter(beverage => beverage.id === compartmentID).map(beverage => beverage.quantity);
    return availability[0] > 0;
  }
}
