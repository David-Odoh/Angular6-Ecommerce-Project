import { TestBed, inject } from '@angular/core/testing';

import { CachingService } from './caching.service';

describe('CachingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachingService]
    });
  });

  it('should be created', inject([CachingService], (service: CachingService) => {
    expect(service).toBeTruthy();
  }));
});
