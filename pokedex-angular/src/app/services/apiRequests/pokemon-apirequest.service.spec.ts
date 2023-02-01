import { TestBed } from '@angular/core/testing';

import { PokemonAPIRequestService } from './pokemon-apirequest.service';

describe('PokemonAPIRequestService', () => {
  let service: PokemonAPIRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonAPIRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
