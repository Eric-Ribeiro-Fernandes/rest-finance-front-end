import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancarOperacaoComponent } from './lancar-operacao.component';

describe('LancarOperacaoComponent', () => {
  let component: LancarOperacaoComponent;
  let fixture: ComponentFixture<LancarOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancarOperacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancarOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
