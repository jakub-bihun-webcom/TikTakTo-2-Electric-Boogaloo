import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CostumerMessageService } from '../services/costumer-message.service';

@Component({
  selector: 'app-output-costumer',
  templateUrl: './output-costumer.component.html',
  styleUrls: ['./output-costumer.component.css']
})

/**
 * Komponenten Klasse, welche die Getränkeausgabe und das Rückgeld regelt.
 */
export class OutputCostumerComponent {
  beverageName?: string;
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

  // Fügt die Bestellung dem Ausgabefeld hinzu.
  getOrder(beverageName: string, change: number) {
    this.change += change;
    if (this.beverageName === undefined) {
      this.beverageName = beverageName;
    } else {
      this.beverageName = beverageName + ' ' + this.beverageName;
    }
  }

  // Addiert das zurückgeforderte Geld zum aktuellen Rückgeld hinzu.
  canceledMoneyOutput(value: number) {
    this.change += value;
  }

  // Setzt die Ausgabe Getränk, das Rückgeld und die customerMessage auf ihre Ursprungswerte zurück
  resetOutput() {
    this.change = 0;
    this.beverageName = '';
    this.costumerMessageService.setCostumerMessage('Willkommen beim besten Getränke Automaten');
  }
}
