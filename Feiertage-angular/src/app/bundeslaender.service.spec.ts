import { TestBed } from '@angular/core/testing';

import { BundeslaenderService } from './bundeslaender.service';

describe('BundeslaenderService', () => {
  let service: BundeslaenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundeslaenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
