import { TestBed } from '@angular/core/testing';

import { VerifyInputService } from './verify-input.service';

describe('VerifyInputService', () => {
  let service: VerifyInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
