import { TestBed } from '@angular/core/testing';

import { RunhistoryService } from './runhistory.service';

describe('RunhistoryService', () => {
  let service: RunhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
