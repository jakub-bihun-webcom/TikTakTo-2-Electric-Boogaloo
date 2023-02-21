import { TestBed } from '@angular/core/testing';

import { ReturnMoneyService } from './return-money.service';

describe('ReturnMoneyService', () => {
  let service: ReturnMoneyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturnMoneyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
