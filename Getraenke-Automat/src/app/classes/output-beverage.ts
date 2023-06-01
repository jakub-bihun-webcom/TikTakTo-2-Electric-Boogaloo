import { Beverage2 } from './beverage2';

/**
 * Die Klasse repräsentiert das Ausgabefach für Getränke. Bestellte Getränke werden hier gespeichert.
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
   * Gibt die Getränke-Objekte zurück und leert das Getränke-Array in dem Objekt.
   */
  removeBeverages(): Beverage2[] {
    const beveragesStored = this.beverages;
    this.beverages = [];
    return beveragesStored;
  }
}
