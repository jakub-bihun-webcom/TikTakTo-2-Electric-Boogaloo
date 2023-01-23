import { TestBed } from '@angular/core/testing';

import { FeiertageService } from './feiertage.service';

describe('FeiertageService', () => {
  let service: FeiertageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeiertageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
