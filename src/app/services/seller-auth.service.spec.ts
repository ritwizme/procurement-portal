import { TestBed } from '@angular/core/testing';

import { SellerAuthService } from './seller-auth.service';

describe('SellerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerAuthService = TestBed.get(SellerAuthService);
    expect(service).toBeTruthy();
  });
});
