import { TestBed } from '@angular/core/testing';

import { BeverageChoiceVerifierService } from './beverage-choice-verifier.service';

fdescribe('VerifyInputService', () => {
  let service: BeverageChoiceVerifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeverageChoiceVerifierService);
  });

  it('should pass verification for valid compartment ID', () => {
    expect(service.isValidID('1')).toBeTruthy();
    expect(service.isValidID('2')).toBeTruthy();
    expect(service.isValidID('5')).toBeTruthy();
  });

  it('should fail validation for not existing compartment ID', () => {
    expect(service.isValidID('0')).toBeFalsy();
    expect(service.isValidID('6')).toBeFalsy();
    expect(service.isValidID('12')).toBeFalsy();
  });

  it('should fail validation for non-number like inputs', () => {
    expect(service.isValidID('wrongID')).toBeFalsy();
    expect(service.isValidID('string')).toBeFalsy();
  });
});
