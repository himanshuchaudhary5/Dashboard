import { TestBed } from '@angular/core/testing';

import { LatestSuiteStatusService } from './latest-suite-status.service';

describe('LatestSuiteStatusService', () => {
  let service: LatestSuiteStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestSuiteStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
