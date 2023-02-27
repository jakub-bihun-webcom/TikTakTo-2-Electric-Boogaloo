import { Component, OnInit } from '@angular/core';
import { Beverage } from '../beverage';
import { beverageList } from '../beverage-list';
import { UpdateBeverageQuantityService } from '../services/update-beverage-quantity.service';

@Component({
  selector: 'app-getraenke-liste',
  templateUrl: './beverage-list.component.html',
  styleUrls: ['./beverage-list.component.css']
})
export class BeverageListComponent {
  beverages = beverageList;

  constructor(private updateBeverageQuantityService: UpdateBeverageQuantityService) {}

  ngOnInit(): void {
    this.updateBeverageQuantityService.updatedBeverageList.subscribe(list => {
      this.updateList(list);
    });
  }

  updateList(updatedList: Beverage[]) {
    this.beverages = updatedList;
  }
}
