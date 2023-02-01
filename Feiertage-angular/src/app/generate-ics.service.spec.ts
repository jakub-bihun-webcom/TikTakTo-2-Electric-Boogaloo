import { TestBed } from '@angular/core/testing';

import { GenerateIcsService } from './generate-ics.service';

describe('GenerateIcsService', () => {
  let service: GenerateIcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateIcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
