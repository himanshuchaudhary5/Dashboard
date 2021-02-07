import { TestBed } from '@angular/core/testing';

import { TestStepsService } from './test-steps.service';

describe('TestStepsService', () => {
  let service: TestStepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestStepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
