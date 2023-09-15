import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatuajeMediiComponent } from './tatuaje-medii.component';

describe('TatuajeMediiComponent', () => {
  let component: TatuajeMediiComponent;
  let fixture: ComponentFixture<TatuajeMediiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatuajeMediiComponent]
    });
    fixture = TestBed.createComponent(TatuajeMediiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
