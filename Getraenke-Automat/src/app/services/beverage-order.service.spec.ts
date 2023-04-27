import { TestBed } from '@angular/core/testing';

import { BeverageOrderService } from './beverage-order.service';

fdescribe('BeverageOrderService', () => {
  let service: BeverageOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageOrderService);
  });

  it('should get Beverage Price', () => {
    expect(service.getBeveragePrice(1)).toEqual(2)
    expect(service.getBeveragePrice(2)).toEqual(2.5)
    expect(service.getBeveragePrice(3)).toEqual(1.5)
    expect(service.getBeveragePrice(4)).toEqual(1)
  });

  it('should get Beverage Name', () => {
    expect(service.getBeverageName(1)).toEqual('Cola')
    expect(service.getBeverageName(2)).toEqual('Fanta')
    expect(service.getBeverageName(5)).toEqual('Bier')
  });

  it('should check for Beverage availability', () => {
    expect(service.checkAvailability(5)).toBeTruthy()

    expect(service.getBeverageName(2)).toEqual('Fanta')
    expect(service.getBeverageName(5)).toEqual('Bier')
  });
});
