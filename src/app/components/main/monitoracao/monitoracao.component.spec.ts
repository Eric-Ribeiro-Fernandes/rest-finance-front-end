import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoracaoComponent } from './monitoracao.component';

describe('MonitoracaoComponent', () => {
  let component: MonitoracaoComponent;
  let fixture: ComponentFixture<MonitoracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoracaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
