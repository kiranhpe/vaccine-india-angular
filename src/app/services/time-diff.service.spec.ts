import { TestBed } from '@angular/core/testing';

import { TimeDiffService } from './time-diff.service';

describe('TimeDiffService', () => {
  let service: TimeDiffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeDiffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
