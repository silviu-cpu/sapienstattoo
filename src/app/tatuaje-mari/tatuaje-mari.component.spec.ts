import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatuajeMariComponent } from './tatuaje-mari.component';

describe('TatuajeMariComponent', () => {
  let component: TatuajeMariComponent;
  let fixture: ComponentFixture<TatuajeMariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatuajeMariComponent]
    });
    fixture = TestBed.createComponent(TatuajeMariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
