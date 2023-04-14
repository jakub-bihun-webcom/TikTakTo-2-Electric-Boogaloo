import { TestBed } from '@angular/core/testing';

import { BeverageQuantityHandlerService } from './beverage-quantity-handler.service';

describe('UpdateBeverageQuantitiyService', () => {
  let service: BeverageQuantityHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageQuantityHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
