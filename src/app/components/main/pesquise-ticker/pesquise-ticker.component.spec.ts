import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquiseTickerComponent } from './pesquise-ticker.component';

describe('PesquiseTickerComponent', () => {
  let component: PesquiseTickerComponent;
  let fixture: ComponentFixture<PesquiseTickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquiseTickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquiseTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
