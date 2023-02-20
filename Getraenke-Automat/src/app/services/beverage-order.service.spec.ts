import { TestBed } from '@angular/core/testing';

import { BeverageOrderService } from './beverage-order.service';

describe('BeverageOrderService', () => {
  let service: BeverageOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
