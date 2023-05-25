import { TestBed } from '@angular/core/testing';
import { beverageList } from '../beverage-list';
import { HandleOrderService } from './handle-order.service';

describe('HandleOrderService', () => {
  let service: HandleOrderService;
  const safeBeverageList = beverageList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleOrderService);

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

  it('should check if order is valid', () => {
    expect(service.isOrderValid(5, '5')).toBeTrue();
    expect(service.isOrderValid(3, '2')).toBeTrue();
    expect(service.isOrderValid(6, '1')).toBeTrue();
    expect(service.isOrderValid(3, '5')).toBeTrue();
  });

  it('should check if order is invalid', () => {
    expect(service.isOrderValid(1, 'wrongID')).toBeFalse();
    expect(service.isOrderValid(3, 'a')).toBeFalse()
    expect(service.isOrderValid(4, '4')).toBeFalse()
    expect(service.isOrderValid(0, '2')).toBeFalse();
  });
});
