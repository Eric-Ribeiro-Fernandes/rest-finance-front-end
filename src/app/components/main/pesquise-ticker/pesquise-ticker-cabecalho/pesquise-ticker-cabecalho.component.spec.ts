import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquiseTickerCabecalhoComponent } from './pesquise-ticker-cabecalho.component';

describe('PesquiseTickerCabecalhoComponent', () => {
  let component: PesquiseTickerCabecalhoComponent;
  let fixture: ComponentFixture<PesquiseTickerCabecalhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquiseTickerCabecalhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquiseTickerCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
