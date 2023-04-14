import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';
import { BeverageQuantityHandlerService } from '../services/beverage-quantity-handler.service';

@Component({
  selector: 'app-beverage-list',
  templateUrl: './beverage-list.component.html',
  styleUrls: ['./beverage-list.component.css']
})
export class BeverageListComponent {
  beverages = beverageList;

  constructor(private beverageQuantityHandlerService: BeverageQuantityHandlerService) {}

  ngOnInit(): void {
    this.beverageQuantityHandlerService.updatedBeverageList.subscribe(list => {
      this.updateList(list);
    });
  }

  updateList(updatedList: Beverage[]) {
    this.beverages = updatedList;
  }
}
