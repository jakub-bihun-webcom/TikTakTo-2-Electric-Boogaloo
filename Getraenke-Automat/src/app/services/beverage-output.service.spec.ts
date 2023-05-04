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

  it('should set the order for Beverage Output', () => {
    service.setOrder(3, 1);
    expect(service.orderOutput.getValue().change).toEqual(3);
    expect(service.orderOutput.getValue().beverageName).toEqual('Cola ');
    service.setOrder(1.5, 2);
    expect(service.orderOutput.getValue().change).toEqual(4.5);
    expect(service.orderOutput.getValue().beverageName).toEqual('Fanta Cola ');
    service.setOrder(11, 4);
    expect(service.orderOutput.getValue().change).toEqual(15.5);
    expect(service.orderOutput.getValue().beverageName).toEqual('Wasser Fanta Cola ');
    service.resetOrderOutputState();
    expect(service.orderOutput.getValue().change).toEqual(0);
    expect(service.orderOutput.getValue().beverageName).toEqual('');
  });

  it('should add the return Money to the Output', () => {
    service.returnMoney(2);
    expect(service.orderOutput.getValue().change).toEqual(2);
    service.returnMoney(1.8);
    expect(service.orderOutput.getValue().change).toEqual(3.8);
    service.returnMoney(9.95);
    expect(service.orderOutput.getValue().change).toEqual(13.75);
  });
});
