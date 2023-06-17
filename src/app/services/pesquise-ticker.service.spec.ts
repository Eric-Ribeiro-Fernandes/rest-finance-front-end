import { TestBed } from '@angular/core/testing';

import { ApiFinanceService } from './api-finance.service';

describe('ApiFinanceService', () => {
  let service: ApiFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiFinanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
