import { Component } from '@angular/core';
import { CashRegisterService } from '../services/cash-register.service';

@Component({
  selector: 'app-cash-registry',
  templateUrl: './cash-registry.component.html',
  styleUrls: ['./cash-registry.component.css']
})
export class CashRegistryComponent {
  registry: number = 100;

  constructor(private cashRegisterService: CashRegisterService) {}

  change = this.cashRegisterService.calculateChange(inputMoney, priceBeverage)

}
