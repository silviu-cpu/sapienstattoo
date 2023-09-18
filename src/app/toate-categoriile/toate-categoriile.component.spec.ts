import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToateCategoriileComponent } from './toate-categoriile.component';

describe('ToateCategoriileComponent', () => {
  let component: ToateCategoriileComponent;
  let fixture: ComponentFixture<ToateCategoriileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToateCategoriileComponent]
    });
    fixture = TestBed.createComponent(ToateCategoriileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
