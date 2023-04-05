import { TestBed } from '@angular/core/testing';

import { CustomerMessageService } from './customer-message.service';

describe('CustomerMessageService', () => {
  let service: CustomerMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
