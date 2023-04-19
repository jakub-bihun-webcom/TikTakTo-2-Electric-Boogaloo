import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  constructor() {}

  validID(compartmentID: string): boolean {
    const parsedInput = parseInt(compartmentID);
    return !(isNaN(parsedInput) || parsedInput > beverageList.length)
  }
}
