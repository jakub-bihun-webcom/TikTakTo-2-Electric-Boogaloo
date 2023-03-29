import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerMessageService {
  costumerMessage = new BehaviorSubject<string>('Willkommen beim besten Getränke Automaten');

  setCostumerMessage(text: string) {
    this.costumerMessage.next(text);
  }
}
