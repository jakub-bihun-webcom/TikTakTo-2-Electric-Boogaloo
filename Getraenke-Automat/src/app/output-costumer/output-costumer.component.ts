import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CostumerMessageService } from '../services/costumer-message.service';

@Component({
  selector: 'app-output-costumer',
  templateUrl: './output-costumer.component.html',
  styleUrls: ['./output-costumer.component.css']
})
export class OutputCostumerComponent {
  beverageName: string = 'leer';
  change: number = 0;

  constructor(
    private beverageOutputService: BeverageOutputService,
    private costumerMessageService: CostumerMessageService
  ) {}

  ngOnInit(): void {
    this.beverageOutputService.orderOutput.subscribe(order => {
      this.getOrder(order.beverageName, order.change);
    });
    this.beverageOutputService.canceledMoney.subscribe((value: number) => {
      this.canceledMoneyOutput(value);
    });
  }

  getOrder(beverageName: string, change: number) {
    this.change += change;
    if (this.beverageName === 'leer') {
      this.beverageName = beverageName;
    } else this.beverageName = beverageName + ' ' + this.beverageName;
  }

  canceledMoneyOutput(value: number) {
    this.change += value;
  }

  resetOutput() {
    this.change = 0;
    this.beverageName = 'leer';
    this.costumerMessageService.setCostumerMessage('Willkommen beim besten Getränke Automaten');
  }
}
