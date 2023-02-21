import { Component, OnInit } from '@angular/core';
import { beverageList } from '../beverage-list';
import { BeverageOutputService } from '../services/beverage-output.service';

@Component({
  selector: 'app-output-costumer',
  templateUrl: './output-costumer.component.html',
  styleUrls: ['./output-costumer.component.css']
})
export class OutputCostumerComponent {
  beverageName?: string;
  change?: number;

  constructor(private beverageOutputService: BeverageOutputService) {}

  ngOnInit() {
    this.beverageOutputService.orderOutput.subscribe(order => {
      this.getOrder(order.beverageName, order.change);
    });
  }

  getOrder(beverageName: string, change: number) {
    this.change = change;
    this.beverageName = beverageName;
  }
}
