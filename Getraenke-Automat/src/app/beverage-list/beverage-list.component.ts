import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';
import { BeverageQuantityService } from '../services/beverage-quantity.service';

@Component({
  selector: 'app-beverage-list',
  templateUrl: './beverage-list.component.html',
  styleUrls: ['./beverage-list.component.css']
})
export class BeverageListComponent {
  beverages = beverageList;

  constructor(private beverageQuantityService: BeverageQuantityService) {}

  ngOnInit(): void {
    this.beverageQuantityService.updatedBeverageList.subscribe(list => {
      this.updateList(list);
    });
  }

  updateList(updatedList: Beverage[]) {
    this.beverages = updatedList;
  }
}
