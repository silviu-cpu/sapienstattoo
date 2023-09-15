import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaleComponent } from './animale.component';

describe('AnimaleComponent', () => {
  let component: AnimaleComponent;
  let fixture: ComponentFixture<AnimaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimaleComponent]
    });
    fixture = TestBed.createComponent(AnimaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
