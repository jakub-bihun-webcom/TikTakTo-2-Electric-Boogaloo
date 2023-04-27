import { TestBed } from '@angular/core/testing';

import { BeverageChoiceVerifierService } from './beverage-choice-verifier.service';

describe('VerifyInputService', () => {
  let service: BeverageChoiceVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageChoiceVerifierService);
  });

  it('should be created', () => {
    expect(service.isValidID('1')).toBeTruthy();
    expect(service.isValidID('5')).toBeTruthy();
    expect(service.isValidID('12')).toBeFalsy();
    expect(service.isValidID('wrongID')).toBeFalsy();
    expect(service.isValidID('string')).toBeFalsy();
  });
});
