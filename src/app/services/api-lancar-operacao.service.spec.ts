import { TestBed } from '@angular/core/testing';

import { ApiLancarOperacaoService } from './api-lancar-operacao.service';

describe('ApiLancarOperacaoService', () => {
  let service: ApiLancarOperacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLancarOperacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
