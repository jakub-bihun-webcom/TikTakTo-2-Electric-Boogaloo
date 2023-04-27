import { TestBed } from '@angular/core/testing';

import { HandleOrderService } from './handle-order.service';

describe('HandleOrderService', () => {
  let service: HandleOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleOrderService);
  });

  it('should check if order is valid', () => {
    expect(service.isOrderValid(1, 'wrongID')).toBeFalsy();
    expect(service.isOrderValid(3, 'a')).toBeFalsy();
    expect(service.isOrderValid(5, '5')).toBeTruthy();
    expect(service.isOrderValid(5, '5')).toBeFalsy();
    expect(service.isOrderValid(4, '4')).toBeTruthy();
    expect(service.isOrderValid(3, '2')).toBeTruthy();
    expect(service.isOrderValid(0, '2')).toBeFalsy();
  });
});
