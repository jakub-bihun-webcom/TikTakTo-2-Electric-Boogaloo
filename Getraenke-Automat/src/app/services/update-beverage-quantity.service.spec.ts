import { TestBed } from '@angular/core/testing';

import { BeverageQuantityService } from './beverage-quantity.service';

describe('UpdateBeverageQuantitiyService', () => {
  let service: BeverageQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
