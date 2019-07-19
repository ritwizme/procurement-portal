import { TestBed } from '@angular/core/testing';

import { RentMachineryService } from './rent-machinery.service';

describe('RentMachineryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RentMachineryService = TestBed.get(RentMachineryService);
    expect(service).toBeTruthy();
  });
});
