import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  validID(input: any) {
    const parsedInput = parseInt(input);
    if (isNaN(parsedInput)) {
      throw new Error('Keine Zahl');
    }
    if (parsedInput > beverageList.length) {
      throw new Error('Zahl keine gültige Getränke-ID');
    }
  }
}
