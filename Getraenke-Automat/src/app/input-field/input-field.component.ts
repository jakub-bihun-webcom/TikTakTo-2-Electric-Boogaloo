import { Component } from '@angular/core';
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

  constructor(private verifyInputService: VerifyInputService, private cashRegisterService: CashRegisterService) {}

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
      const change = this.cashRegisterService.calculateChange(this.paidAmount, 2, this.registry);
      console.log(change + 'change');
    }
  }

  cancelButton() {
    this.chosenID = undefined;
    this.inputField = '';
  }
}
