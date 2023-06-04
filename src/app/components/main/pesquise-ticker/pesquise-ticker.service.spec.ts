import { TestBed } from '@angular/core/testing';

import { PesquiseTickerService } from './pesquise-ticker.service';

describe('PesquiseTickerService', () => {
  let service: PesquiseTickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquiseTickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
