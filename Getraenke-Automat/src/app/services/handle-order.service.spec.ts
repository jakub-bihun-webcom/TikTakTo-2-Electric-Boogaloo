import { TestBed } from '@angular/core/testing';

import { HandleOrderService } from './handle-order.service';

describe('HandleOrderService', () => {
  let service: HandleOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
