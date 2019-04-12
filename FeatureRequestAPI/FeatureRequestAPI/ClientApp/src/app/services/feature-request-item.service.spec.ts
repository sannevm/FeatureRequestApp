import { TestBed } from '@angular/core/testing';

import { FeatureRequestItemService } from './feature-request-item.service';

describe('FeatureRequestItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureRequestItemService = TestBed.get(FeatureRequestItemService);
    expect(service).toBeTruthy();
  });
});
