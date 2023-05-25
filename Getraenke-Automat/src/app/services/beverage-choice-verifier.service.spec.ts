import { TestBed } from '@angular/core/testing';

import { BeverageChoiceVerifierService } from './beverage-choice-verifier.service';

describe('VerifyInputService', () => {
  let service: BeverageChoiceVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageChoiceVerifierService);
  });

  it('should pass verification for valid compartment ID', () => {
    expect(service.isValidID('1')).toBeTrue();
    expect(service.isValidID('2')).toBeTrue();
    expect(service.isValidID('5')).toBeTrue();
  });

  it('should fail validation for not existing compartment ID', () => {
    expect(service.isValidID('0')).toBeFalse();
    expect(service.isValidID('6')).toBeFalse();
    expect(service.isValidID('12')).toBeFalse();
  });

  it('should fail validation for non-number like inputs', () => {
    expect(service.isValidID('wrongID')).toBeFalse();
    expect(service.isValidID('string')).toBeFalse();
  });
});
