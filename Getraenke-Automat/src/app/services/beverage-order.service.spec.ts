import { TestBed } from '@angular/core/testing';
import { beverageList } from '../beverage-list';

import { BeverageOrderService } from './beverage-order.service';

describe('BeverageOrderService', () => {
  let service: BeverageOrderService;
  const safeBeverageList = beverageList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageOrderService);

    beverageList[0] = { id: 1, name: 'Cola', price: 2, quantity: 3 };
    beverageList[1] = { id: 2, name: 'Fanta', price: 2.5, quantity: 4 };
    beverageList[2] = { id: 3, name: 'Sprite', price: 1.5, quantity: 0 };
    beverageList[3] = { id: 4, name: 'Wasser', price: 1, quantity: 0 };
    beverageList[4] = { id: 5, name: 'Bier', price: 3, quantity: 4 };
  });

  afterEach(() => {
    beverageList[0] = safeBeverageList[0];
    beverageList[1] = safeBeverageList[1];
    beverageList[2] = safeBeverageList[2];
    beverageList[3] = safeBeverageList[3];
    beverageList[4] = safeBeverageList[4];
  });

  it('should get beverage Price', () => {
    expect(service.getBeveragePrice(1)).toEqual(2);
    expect(service.getBeveragePrice(2)).toEqual(2.5);
    expect(service.getBeveragePrice(3)).toEqual(1.5);
    expect(service.getBeveragePrice(4)).toEqual(1);
    expect(service.getBeveragePrice(5)).toEqual(3);
  });

  it('should get beverage Name', () => {
    expect(service.getBeverageName(1)).toEqual('Cola');
    expect(service.getBeverageName(2)).toEqual('Fanta');
    expect(service.getBeverageName(3)).toEqual('Sprite');
    expect(service.getBeverageName(4)).toEqual('Wasser');
    expect(service.getBeverageName(5)).toEqual('Bier');
  });

  it('should check for beverage availability', () => {
    expect(service.checkAvailability(1)).toBeTruthy();
    expect(service.checkAvailability(3)).toBeFalsy();
    expect(service.checkAvailability(4)).toBeFalsy();
  });
  
  it('should not work for wrong ID', () => {
    expect(service.getBeveragePrice(6)).toBeUndefined();
    expect(service.getBeveragePrice(7)).toBeUndefined();
    expect(service.getBeverageName(6)).toBeUndefined();
    expect(service.checkAvailability(10)).toBeFalsy()
  });
});
