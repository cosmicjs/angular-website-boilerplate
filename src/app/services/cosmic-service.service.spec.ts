import { TestBed } from '@angular/core/testing';

import { CosmicServiceService } from './cosmic-service.service';

describe('CosmicServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CosmicServiceService = TestBed.get(CosmicServiceService);
    expect(service).toBeTruthy();
  });
});
