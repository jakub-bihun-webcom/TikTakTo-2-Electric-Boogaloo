import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostumerMessageService {
  costumerMessage = new BehaviorSubject<string>('');

  setCostumerMessage(text: string) {
    this.costumerMessage.next(text);
  }
}
