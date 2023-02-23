import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageOrderService {
  getBeveragePrice(inputID: number) {
    const price = beverageList.filter(x => x.id === inputID).map(x => x.price);
    return price[0];
  }

  getBeverageName(inputID: number) {
    const name = beverageList.filter(x => x.id === inputID).map(x => x.name);
    return name[0];
  }

  checkAvailibity(inputID: number): boolean {
    const avaibility = beverageList.filter(x => x.id === inputID).map(x => x.quantity);
    return avaibility[0] > 0;
  }
}
