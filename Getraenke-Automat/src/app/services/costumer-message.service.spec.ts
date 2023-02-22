import { TestBed } from '@angular/core/testing';

import { CostumerMessageService } from './costumer-message.service';

describe('CostumerMessageService', () => {
  let service: CostumerMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostumerMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
