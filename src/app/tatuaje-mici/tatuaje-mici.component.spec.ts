import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatuajeMiciComponent } from './tatuaje-mici.component';

describe('TatuajeMiciComponent', () => {
  let component: TatuajeMiciComponent;
  let fixture: ComponentFixture<TatuajeMiciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TatuajeMiciComponent]
    });
    fixture = TestBed.createComponent(TatuajeMiciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
