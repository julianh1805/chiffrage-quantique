import { TestBed } from '@angular/core/testing';

import { EntropyMeasureService } from './entropy-measure.service';

describe('EntropyMeasureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntropyMeasureService = TestBed.get(EntropyMeasureService);
    expect(service).toBeTruthy();
  });
});
