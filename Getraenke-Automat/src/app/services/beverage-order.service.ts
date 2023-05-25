import { Injectable } from '@angular/core';
import { beverageList } from '../beverage-list';

@Injectable({
  providedIn: 'root'
})
export class BeverageOrderService {
  /**
   * Bei einer gültigen compartmentID wird der ausgewählte Getränkepreis zurückgegeben, bei einer ungültigen compartmentID wird undefined zurückgegeben.
   */
  getBeveragePrice(compartmentID: number): number | undefined {
    return beverageList.filter(beverage => beverage.id === compartmentID).map(beverage => beverage.price)[0];
  }

  /**
   * Bei einer gültigen compartmentID wird der ausgewählte Getränkename zurückgegeben, bei einer ungültigen compartmentID wird undefined zurückgegeben.
   */
  getBeverageName(compartmentID: number): string | undefined {
    return beverageList.filter(beverage => beverage.id === compartmentID).map(beverage => beverage.name)[0];
  }

  /**
   * Überprüft, ob das Getränk noch verfügbar ist.
   */
  checkAvailability(compartmentID: number): boolean {
    const availability = beverageList
      .filter(beverage => beverage.id === compartmentID)
      .map(beverage => beverage.quantity);
    return availability[0] > 0;
  }
}
