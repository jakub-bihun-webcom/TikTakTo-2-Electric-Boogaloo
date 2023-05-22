import { Beverage2 } from './beverage2';

/**
 * Die Klasse repräsentiert das Ausgabefach. Bestellte Getränke und das Rückgeld/Wechselgeld werden hier gespeichert.
 */
export class OutputStorage {
  public change: number = 0;
  public beverages: Beverage2[] = [];

  addChange(change: number): void {
    this.change += change;
  }

  /**
   * Fügt der Getränkeausgabe ein Getränk hinzu.
   */
  addBeverage(beverage: Beverage2): void {
    this.beverages.push(beverage);
  }

  /**
   * Lässt den Kunden das Wechselgeld nehmen.
   */
  takeChange(): number {
    const changeStored = this.change;
    this.change = 0;
    return changeStored;
  }

  /**
   * Lässt einem Kunden das Getränk aus dem Getränkefach nehmen.
   */
  takeBeverages(): Beverage2[] {
    const beveragesStored = this.beverages;
    this.beverages = [];
    return beveragesStored;
  }
}
