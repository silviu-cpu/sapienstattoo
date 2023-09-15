import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackAndGrayComponent } from './black-and-gray.component';

describe('BlackAndGrayComponent', () => {
  let component: BlackAndGrayComponent;
  let fixture: ComponentFixture<BlackAndGrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackAndGrayComponent]
    });
    fixture = TestBed.createComponent(BlackAndGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
