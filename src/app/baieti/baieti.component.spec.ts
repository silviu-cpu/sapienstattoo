import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaietiComponent } from './baieti.component';

describe('BaietiComponent', () => {
  let component: BaietiComponent;
  let fixture: ComponentFixture<BaietiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaietiComponent]
    });
    fixture = TestBed.createComponent(BaietiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
