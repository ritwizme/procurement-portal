import { TestBed } from '@angular/core/testing';

import { GetBuyerBidsService } from './get-buyer-bids.service';

describe('GetBuyerBidsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBuyerBidsService = TestBed.get(GetBuyerBidsService);
    expect(service).toBeTruthy();
  });
});
