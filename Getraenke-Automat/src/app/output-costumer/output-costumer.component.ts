import { Component } from '@angular/core';
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
      this.canceledMoneyOutput(value);
    });
  }

  getOrder(beverageName: string, change: number) {
    this.change = change;
    this.beverageName = beverageName;
  }

  canceledMoneyOutput(value: number) {
    this.change = value;
  }

  resetOutput(){
    this.change = 0;
    this.beverageName = undefined;
  }
}
