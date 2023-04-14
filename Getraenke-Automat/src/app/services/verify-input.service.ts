import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  constructor() {}

  validID(input: any) {
    const parsedInput = parseInt(input);
    return !(isNaN(parsedInput) || parsedInput > beverageList.length)
  }
}
