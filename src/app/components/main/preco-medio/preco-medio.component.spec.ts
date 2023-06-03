import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecoMedioComponent } from './preco-medio.component';

describe('PrecoMedioComponent', () => {
  let component: PrecoMedioComponent;
  let fixture: ComponentFixture<PrecoMedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecoMedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecoMedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
