import { TestBed } from '@angular/core/testing';

import { PesquiseTickerCabecalhoService } from './pesquise-ticker-cabecalho.service';

describe('PesquiseTickerCabecalhoService', () => {
  let service: PesquiseTickerCabecalhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesquiseTickerCabecalhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
