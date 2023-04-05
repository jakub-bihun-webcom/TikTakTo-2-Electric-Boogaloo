import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';
import { CustomerMessageService } from './customer-message.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  constructor(private customerMessageService: CustomerMessageService) {}

  validID(input: any) {
    const parsedInput = parseInt(input);
    const errorMsg = 'Keine gültige Getränke-ID';
    if (isNaN(parsedInput) || parsedInput > beverageList.length) {
      this.customerMessageService.setCustomerMessage(errorMsg);
      throw new Error(errorMsg);
    }
  }
}
