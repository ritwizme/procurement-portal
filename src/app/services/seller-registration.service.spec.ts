import { TestBed } from '@angular/core/testing';

import { SellerRegistrationService } from './seller-registration.service';

describe('SellerRegistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerRegistrationService = TestBed.get(SellerRegistrationService);
    expect(service).toBeTruthy();
  });
});
