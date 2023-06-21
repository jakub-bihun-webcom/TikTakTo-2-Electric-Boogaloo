import { TestBed } from '@angular/core/testing';
import { beverageList } from '../beverage-list';
import { BeverageOutputService } from './beverage-output.service';

describe('BeverageOutputService', () => {
  let service: BeverageOutputService;
  const safeBeverageList = beverageList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageOutputService);

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

  it('should handle a single order correctly', () => {
    service.setOrder(3, 1);
    expect(service.orderOutput.getValue().change).toEqual(3);
    expect(service.orderOutput.getValue().beverageName).toEqual('Cola ');
    service.resetOrderOutputState();
    service.setOrder(2.5, 2);
    expect(service.orderOutput.getValue().change).toEqual(2.5);
    expect(service.orderOutput.getValue().beverageName).toEqual('Fanta ');
    service.resetOrderOutputState();
    expect(service.orderOutput.getValue().change).toEqual(0);
    expect(service.orderOutput.getValue().beverageName).toEqual('');
  });

  it('should handle multiple orders correctly', () => {
    service.setOrder(3, 1);
    service.setOrder(2.5, 5);
    service.setOrder(1, 2);
    expect(service.orderOutput.getValue().change).toEqual(6.5);
    expect(service.orderOutput.getValue().beverageName).toEqual('Fanta Bier Cola ');
    service.resetOrderOutputState();
    expect(service.orderOutput.getValue().change).toEqual(0);
    expect(service.orderOutput.getValue().beverageName).toEqual('');
  });

  it('should add the return money to the output', () => {
    service.returnMoney(2);
    expect(service.orderOutput.getValue().change).toEqual(2);
    service.returnMoney(1.8);
    expect(service.orderOutput.getValue().change).toEqual(3.8);
    service.returnMoney(9.95);
    expect(service.orderOutput.getValue().change).toEqual(13.75);
    service.resetOrderOutputState();
    expect(service.orderOutput.getValue().change).toEqual(0);
  });
});
