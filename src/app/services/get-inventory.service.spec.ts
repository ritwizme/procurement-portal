import { TestBed } from '@angular/core/testing';

import { GetInventoryService } from './get-inventory.service';

describe('GetInventoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetInventoryService = TestBed.get(GetInventoryService);
    expect(service).toBeTruthy();
  });
});
