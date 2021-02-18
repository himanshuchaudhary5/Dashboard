import { TestBed } from '@angular/core/testing';

import { LatestModulesService } from './latest-modules.service';

describe('LatestModulesService', () => {
  let service: LatestModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
