import { TestBed } from '@angular/core/testing';

import { TextFieldVerifierService } from './text-field-verifier.service';

describe('VerifyInputService', () => {
  let service: TextFieldVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextFieldVerifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
