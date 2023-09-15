import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeteComponent } from './fete.component';

describe('FeteComponent', () => {
  let component: FeteComponent;
  let fixture: ComponentFixture<FeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeteComponent]
    });
    fixture = TestBed.createComponent(FeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
