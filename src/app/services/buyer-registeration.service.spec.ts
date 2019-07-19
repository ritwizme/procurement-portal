import { TestBed } from '@angular/core/testing';

import { BuyerRegisterationService } from './buyer-registeration.service';

describe('BuyerRegisterationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerRegisterationService = TestBed.get(BuyerRegisterationService);
    expect(service).toBeTruthy();
  });
});
