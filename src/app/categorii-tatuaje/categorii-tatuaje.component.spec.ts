import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriiTatuajeComponent } from './categorii-tatuaje.component';

describe('CategoriiTatuajeComponent', () => {
  let component: CategoriiTatuajeComponent;
  let fixture: ComponentFixture<CategoriiTatuajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriiTatuajeComponent]
    });
    fixture = TestBed.createComponent(CategoriiTatuajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
