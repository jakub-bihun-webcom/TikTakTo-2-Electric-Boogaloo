import { Component } from '@angular/core';
import { beverageList } from '../beverage-list';

@Component({
  selector: 'app-getraenke-liste',
  templateUrl: './beverage-list.component.html',
  styleUrls: ['./beverage-list.component.css']
})
export class BeverageListComponent {
  constructor() {}

  // this.bever
  beverages = beverageList;
}
