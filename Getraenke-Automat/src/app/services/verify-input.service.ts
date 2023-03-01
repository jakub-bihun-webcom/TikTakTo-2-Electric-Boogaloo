import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';
import { CostumerMessageService } from './costumer-message.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  constructor(private costumerMessageService: CostumerMessageService) {}

  validID(input: any) {
    const parsedInput = parseInt(input);
    const errorMsg = 'Keine gültige Getränke-ID';
    if (isNaN(parsedInput) || parsedInput > beverageList.length) {
      this.costumerMessageService.setCostumerMessage(errorMsg);
      throw new Error(errorMsg);
    }
  }
}
