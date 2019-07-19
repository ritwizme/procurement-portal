import { TestBed } from '@angular/core/testing';

import { AcceptBiddingService } from './accept-bidding.service';

describe('AcceptBiddingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptBiddingService = TestBed.get(AcceptBiddingService);
    expect(service).toBeTruthy();
  });
});
