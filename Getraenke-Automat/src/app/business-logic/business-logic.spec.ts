import { BeverageInterface } from './beverage-interface';
import { BeverageMachineFacade } from './beverage-machine-facade';
import { Beverage2 } from './beverage2';
import { Refills } from './refills';

describe('BeverageMachineFacade', () => {
  let beverageMachineFacade: BeverageMachineFacade;
  let beverage: Beverage2;

  beforeEach(() => {
    beverageMachineFacade = new BeverageMachineFacade();
    beverage = new Beverage2();

    const refills: Refills = new Map();
    refills.set(1, {
      price: 1,
      beverages: [beverage.newBeverage('Wasser'), beverage.newBeverage('Wasser'), beverage.newBeverage('Wasser')]
    });
    refills.set(2, {
      price: 2,
      beverages: [
        beverage.newBeverage('Cola'),
        beverage.newBeverage('Cola'),
        beverage.newBeverage('Cola'),
        beverage.newBeverage('Cola'),
        beverage.newBeverage('Cola')
      ]
    });
    refills.set(3, {
      price: 2.5,
      beverages: [
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier'),
        beverage.newBeverage('Bier')
      ]
    });
    refills.set(4, {
      price: 3,
      beverages: [] // Fach soll leer bleiben
    });

    beverageMachineFacade.fillUp(refills);
  });

  fit('should insert money and display the inserted amount', () => {
    expect(beverageMachineFacade.readDisplay()).toBe('Bitte Bestellvorgang starten');
    expect(beverageMachineFacade.readInsertedMoney()).toBe('Aktuelles Guthaben: 0 €');

    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(0.5);

    expect(beverageMachineFacade.readInsertedMoney()).toBe('Aktuelles Guthaben: 1.50 €');

    // const beverages = beverageMachineFacade.takeBeverages();
    //
    // expect(beverages).toEqual([]);
  });

  it('should return correct order response given not enough money inserted', () => {
    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(0.5);
    beverageMachineFacade.order(2);

    expect(beverageMachineFacade.readDisplay()).toBe('Nicht genug Geld eingeworfen');
  });

  it('should return correct order response given enough money inserted and compartment is empty', () => {
    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(2);
    beverageMachineFacade.order(4);

    expect(beverageMachineFacade.readDisplay()).toBe('Getränk nicht verfügbar');
  });

  it('should apply order correctly given too much money inserted and beverage is available', () => {
    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(0.5);

    beverageMachineFacade.order(1);
    expect(beverageMachineFacade.readDisplay()).toBe('Bitte Bestellvorgang starten');

    const beverages = beverageMachineFacade.takeBeverages();
    // @ts-ignore
    const expectedBeverage: Beverage = undefined; // TODO: 1x Wasser
    expect(beverages).toEqual([expectedBeverage]);

    const change = beverageMachineFacade.getChange();
    expect(change).toBe(0.5);
  });

  it('should cancel order and return inserted money', () => {
    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(0.5);
    beverageMachineFacade.insertMoney(0.2);
    beverageMachineFacade.cancelOrder();
    const change = beverageMachineFacade.getChange();

    expect(change).toBe(1.7);
  });

  it('should finally accept order after enough money has been inserted', () => {
    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.insertMoney(0.5);
    beverageMachineFacade.order(2);

    expect(beverageMachineFacade.readDisplay()).toBe('Nicht genug Geld eingeworfen');

    beverageMachineFacade.insertMoney(1);
    expect(beverageMachineFacade.readInsertedMoney()).toBe('Aktuelles Guthaben: 2,50 €');
    beverageMachineFacade.order(2);

    expect(beverageMachineFacade.readDisplay()).toBe('Bitte Bestellvorgang starten');

    const beverages = beverageMachineFacade.takeBeverages();

    // @ts-ignore
    const expectedBeverage: Beverage = undefined; // TODO: 1x Cola
    expect(beverages).toEqual([expectedBeverage]);

    const change = beverageMachineFacade.getChange();

    expect(change).toBe(0.5);
  });

  it('should handle multiple orders correctly', () => {
    beverageMachineFacade.insertMoney(5);
    beverageMachineFacade.order(2);

    expect(beverageMachineFacade.readDisplay()).toBe('Bitte Bestellvorgang starten');

    beverageMachineFacade.insertMoney(1);
    beverageMachineFacade.order(3);

    expect(beverageMachineFacade.readDisplay()).toBe('Bitte Bestellvorgang starten');

    const actualBeverages = beverageMachineFacade.takeBeverages();

    // const expectedBeverages: Beverage[] = []; // TODO: 1x Cola und 1x Bier
    // expect(actualBeverages).toEqual(expectedBeverages);

    const change = beverageMachineFacade.getChange();

    expect(change).toBe(1.5);

    expect(beverageMachineFacade.readInsertedMoney()).toBe('Aktuelles Guthaben: 0 €');
  });
});
