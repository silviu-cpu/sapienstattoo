import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiniareComponent } from './liniare.component';

describe('LiniareComponent', () => {
  let component: LiniareComponent;
  let fixture: ComponentFixture<LiniareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiniareComponent]
    });
    fixture = TestBed.createComponent(LiniareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
