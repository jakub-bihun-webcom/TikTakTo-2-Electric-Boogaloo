import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageQuantityService {
  updatedBeverageList = new BehaviorSubject<Beverage[]>(beverageList);

  reduceQuantityByOne(id: number) {
    if (beverageList[id - 1].quantity === 0){
      throw new Error('Getränk ist ausverkauft')
    }
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
