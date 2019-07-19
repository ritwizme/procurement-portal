import { TestBed } from '@angular/core/testing';

import { GetInventoryBySellerService } from './get-inventory-by-seller.service';

describe('GetInventoryBySellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetInventoryBySellerService = TestBed.get(GetInventoryBySellerService);
    expect(service).toBeTruthy();
  });
});
