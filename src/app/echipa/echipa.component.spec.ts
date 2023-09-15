import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchipaComponent } from './echipa.component';

describe('EchipaComponent', () => {
  let component: EchipaComponent;
  let fixture: ComponentFixture<EchipaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EchipaComponent]
    });
    fixture = TestBed.createComponent(EchipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
