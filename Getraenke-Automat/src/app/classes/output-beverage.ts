import { Beverage2 } from './beverage2';

/**
 * Die Klasse repräsentiert das Ausgabefach. Bestellte Getränke und das Rückgeld/Wechselgeld werden hier gespeichert.
 */
export class OutputBeverage {
  private beverages: Beverage2[] = [];

  /**
   * Fügt der Getränkeausgabe ein Getränk hinzu.
   */
  addBeverage(beverage: Beverage2): void {
    this.beverages.push(beverage);
  }

  /**
   * Lässt einem Kunden das Getränk aus dem Getränkefach nehmen
   */
  removeBeverages(): Beverage2[] {
    const beveragesStored = this.beverages;
    this.beverages = [];
    return beveragesStored;
  }
}
