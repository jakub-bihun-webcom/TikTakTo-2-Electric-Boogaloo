import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyInputService {
  validID(input: any) {
    const parsedInput = parseInt(input);
    if (isNaN(parsedInput)) {
      throw new Error('Keine Zahl');
    }
    if (parsedInput > 5) {
      throw new Error('Zahl keine gültige Getränke-ID');
    }
  }
}
