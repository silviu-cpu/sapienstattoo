import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrisComponent } from './scris.component';

describe('ScrisComponent', () => {
  let component: ScrisComponent;
  let fixture: ComponentFixture<ScrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrisComponent]
    });
    fixture = TestBed.createComponent(ScrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
