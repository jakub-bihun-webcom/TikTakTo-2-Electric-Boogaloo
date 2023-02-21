import { TestBed } from '@angular/core/testing';

import { BeverageOutputService } from './beverage-output.service';

describe('BeverageOutputService', () => {
  let service: BeverageOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
