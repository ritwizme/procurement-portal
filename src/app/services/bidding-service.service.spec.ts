import { TestBed } from '@angular/core/testing';

import { BiddingServiceService } from './bidding-service.service';

describe('BiddingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiddingServiceService = TestBed.get(BiddingServiceService);
    expect(service).toBeTruthy();
  });
});
