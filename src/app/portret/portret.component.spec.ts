import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortretComponent } from './portret.component';

describe('PortretComponent', () => {
  let component: PortretComponent;
  let fixture: ComponentFixture<PortretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortretComponent]
    });
    fixture = TestBed.createComponent(PortretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
