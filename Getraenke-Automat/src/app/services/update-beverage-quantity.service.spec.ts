import { TestBed } from '@angular/core/testing';

import { UpdateBeverageQuantityService } from './update-beverage-quantity.service';

describe('UpdateBeverageQuantitiyService', () => {
  let service: UpdateBeverageQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateBeverageQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
