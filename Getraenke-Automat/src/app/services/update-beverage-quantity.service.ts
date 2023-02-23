import { Injectable } from '@angular/core';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class UpdateBeverageQuantityService {
  updatedBeverageList: Beverage[] = beverageList

  updateQuatity(id: number){
    this.updatedBeverageList = beverageList.map(beverage => {
      if (beverage.id === id) {
        return {...beverage, quantity: beverage.quantity - 1}
      }
      return beverage
    })
  }
}
