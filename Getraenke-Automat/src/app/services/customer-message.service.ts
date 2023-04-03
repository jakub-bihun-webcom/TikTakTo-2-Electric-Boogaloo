import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerMessageService {
  customerMessage = new BehaviorSubject<string>('Willkommen beim besten Getränke Automaten');

  setCustomerMessage(text: string) {
    this.customerMessage.next(text);
  }
}
