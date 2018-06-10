import { TestBed, inject } from '@angular/core/testing';

import { ImageesDatabaseService } from './imagees-database.service';

describe('ImageesDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageesDatabaseService]
    });
  });

  it('should be created', inject([ImageesDatabaseService], (service: ImageesDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
