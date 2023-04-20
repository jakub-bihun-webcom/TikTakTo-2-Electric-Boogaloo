import { TestBed } from '@angular/core/testing';

import { BeverageChoiceVerifierService } from './beverage-choice-verifier.service';

describe('VerifyInputService', () => {
  let service: BeverageChoiceVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageChoiceVerifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
