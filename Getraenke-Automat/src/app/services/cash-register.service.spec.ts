import { TestBed } from '@angular/core/testing';

import { CashRegisterService } from './cash-register.service';

describe('CashRegisterService', () => {
  let service: CashRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashRegisterService);
  });

  it('should return change amount', () => {
    expect(service.calculateChange(5, 2, 100)).toEqual(3);
    expect(service.calculateChange(10, 1.5, 50)).toEqual(8.5);
    expect(service.calculateChange(2, 2, 2)).toEqual(0);
  });

  it('should change the CahsRegister amount', () => {
    expect(service.calculateCashRegisterChange(2, 20)).toEqual(22);
    expect(service.calculateCashRegisterChange(2.5, 5)).toEqual(7.5);
    expect(service.calculateCashRegisterChange(1.5, 3.5)).toEqual(5);
  });

  it('should round the Money to the next five cents', () => {
    expect(service.roundMoneyToFiveCents(1.4999999)).toEqual(1.5);
    expect(service.roundMoneyToFiveCents(2.199999)).toEqual(2.2);
    expect(service.roundMoneyToFiveCents(2.0000002)).toEqual(2);
    expect(service.roundMoneyToFiveCents(2.100032222)).toEqual(2.1);
  });
});
