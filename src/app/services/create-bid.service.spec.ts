import { TestBed } from '@angular/core/testing';

import { CreateBidService } from './create-bid.service';

describe('CreateBidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateBidService = TestBed.get(CreateBidService);
    expect(service).toBeTruthy();
  });
});
