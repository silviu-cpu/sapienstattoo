import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchComponent } from './sketch.component';

describe('SketchComponent', () => {
  let component: SketchComponent;
  let fixture: ComponentFixture<SketchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SketchComponent]
    });
    fixture = TestBed.createComponent(SketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
