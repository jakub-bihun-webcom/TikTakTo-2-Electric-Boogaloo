import { Component } from '@angular/core';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-pay-field',
  templateUrl: './pay-field.component.html',
  styleUrls: ['./pay-field.component.css']
})
export class PayFieldComponent {
  paidAmount: number = 0;

  constructor(private inputFieldComponent: InputFieldComponent) { }

  moneyInput(input:number){
    this.paidAmount = this.paidAmount + input;
  }

  cancelMoneyInput(){
    this.paidAmount = 0
  }

  confirmMoney(){
    if (this.inputFieldComponent.chosenID === undefined){
      return
    }

  }
}
