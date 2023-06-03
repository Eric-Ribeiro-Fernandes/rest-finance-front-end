import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoOperacoesComponent } from './extrato-operacoes.component';

describe('ExtratoOperacoesComponent', () => {
  let component: ExtratoOperacoesComponent;
  let fixture: ComponentFixture<ExtratoOperacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtratoOperacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtratoOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
