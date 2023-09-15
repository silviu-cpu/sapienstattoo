import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriceComponent } from './geometrice.component';

describe('GeometriceComponent', () => {
  let component: GeometriceComponent;
  let fixture: ComponentFixture<GeometriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeometriceComponent]
    });
    fixture = TestBed.createComponent(GeometriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
