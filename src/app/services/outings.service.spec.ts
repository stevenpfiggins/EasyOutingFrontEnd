import { TestBed } from '@angular/core/testing';

import { OutingsService } from './outings.service';

describe('OutingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutingsService = TestBed.get(OutingsService);
    expect(service).toBeTruthy();
  });
});
