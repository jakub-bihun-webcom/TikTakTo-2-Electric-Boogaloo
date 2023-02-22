import { Component, OnInit } from '@angular/core';
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
    this.beverageOutputService.canceledMoney.subscribe((value: number) => {
      this.canceldMoneyOutput(value);
    });
  }

  getOrder(beverageName: string, change: number) {
    this.change = change;
    this.beverageName = beverageName;
  }

  canceldMoneyOutput(value: number) {
    this.change = value;
  }
}
