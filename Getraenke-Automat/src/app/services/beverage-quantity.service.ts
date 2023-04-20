import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageQuantityService {
  updatedBeverageList = new BehaviorSubject<Beverage[]>(beverageList);

  updateQuantity(id: number) {
    this.updatedBeverageList.next(
      beverageList.map(beverage => {
        if (beverage.id === id) {
          return { ...beverage, quantity: beverage.quantity - 1 };
        }
        return beverage;
      })
    );
    beverageList[id - 1].quantity -= 1;
  }
}
