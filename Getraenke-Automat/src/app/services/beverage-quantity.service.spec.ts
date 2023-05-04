import { TestBed } from '@angular/core/testing';
import { beverageList } from '../beverage-list';
import { BeverageQuantityService } from './beverage-quantity.service';

describe('BeverageQuantityService', () => {
  let service: BeverageQuantityService;
  const safeBeverageList = beverageList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageQuantityService);

    beverageList[0] = { id: 1, name: 'Cola', price: 2, quantity: 3 };
    beverageList[1] = { id: 2, name: 'Fanta', price: 2.5, quantity: 4 };
  });

  afterEach(() => {
    beverageList[0] = safeBeverageList[0];
    beverageList[1] = safeBeverageList[1];
  });

  it('should reduce the quantity of beverages by one', () => {
    service.updateQuantity(1);
    service.updateQuantity(2);
    expect(beverageList[0].quantity).toEqual(2);
    expect(beverageList[1].quantity).toEqual(3);
    service.updateQuantity(1);
    expect(beverageList[0].quantity).toEqual(1);
    service.updateQuantity(1);
    expect(beverageList[0].quantity).toEqual(0);
  });
});
