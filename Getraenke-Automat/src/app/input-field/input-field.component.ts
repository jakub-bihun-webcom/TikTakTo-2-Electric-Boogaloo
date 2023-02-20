import { Component } from '@angular/core';
import { BeverageOrderService } from '../services/beverage-order.service';
import { CashRegisterService } from '../services/cash-register.service';
import { VerifyInputService } from '../services/verify-input.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  chosenID?: number;
  inputField: any = '';
  registry: number = 100;
  paidAmount: number = 0;

  constructor(
    private verifyInputService: VerifyInputService,
    private cashRegisterService: CashRegisterService,
    private beverageOrderService: BeverageOrderService
  ) {}

  moneyInput(input: number) {
    this.paidAmount += input;
  }

  cancelMoneyInput() {
    this.paidAmount = 0;
  }

  onInputChange(input: string) {
    this.inputField = input;
  }

  getInput() {
    this.verifyInputService.validID(this.inputField);
    this.chosenID = parseInt(this.inputField);

    if (this.paidAmount > 0) {
      const price = this.beverageOrderService.getBeveragePrice(this.chosenID);
      const change = this.cashRegisterService.calculateChange(this.paidAmount, price, this.registry);
      console.log(change + ' change');
      const beverageName = this.beverageOrderService.getBeverageName(this.chosenID);
      console.log(beverageName)
      this.registry = this.cashRegisterService.calculateRegistryChange(price, this.registry)
      console.log(this.registry + " new registry amount")
    }
  }

  cancelButton() {
    this.chosenID = undefined;
    this.inputField = '';
  }
}
