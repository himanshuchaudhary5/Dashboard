import { TestBed } from '@angular/core/testing';

import { ProductHealthService } from './product-health.service';

describe('ProductHealthService', () => {
  let service: ProductHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
