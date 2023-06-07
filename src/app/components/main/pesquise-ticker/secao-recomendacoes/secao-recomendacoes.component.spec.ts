import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaoRecomendacoesComponent } from './secao-recomendacoes.component';

describe('SecaoRecomendacoesComponent', () => {
  let component: SecaoRecomendacoesComponent;
  let fixture: ComponentFixture<SecaoRecomendacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecaoRecomendacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecaoRecomendacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
