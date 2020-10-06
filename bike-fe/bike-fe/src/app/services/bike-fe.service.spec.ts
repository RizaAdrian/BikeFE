import { TestBed } from '@angular/core/testing';

import { BikeFeService } from './bike-fe.service';

describe('BikeFeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeFeService = TestBed.get(BikeFeService);
    expect(service).toBeTruthy();
  });
});
