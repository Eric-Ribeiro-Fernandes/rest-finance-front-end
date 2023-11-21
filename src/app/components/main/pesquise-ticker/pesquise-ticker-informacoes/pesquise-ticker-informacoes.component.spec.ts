import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquiseTickerInformacoesComponent } from './pesquise-ticker-informacoes.component';

describe('PesquiseTickerInformacoesComponent', () => {
  let component: PesquiseTickerInformacoesComponent;
  let fixture: ComponentFixture<PesquiseTickerInformacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquiseTickerInformacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquiseTickerInformacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
