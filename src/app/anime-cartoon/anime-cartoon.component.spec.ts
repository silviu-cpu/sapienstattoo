import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeCartoonComponent } from './anime-cartoon.component';

describe('AnimeCartoonComponent', () => {
  let component: AnimeCartoonComponent;
  let fixture: ComponentFixture<AnimeCartoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeCartoonComponent]
    });
    fixture = TestBed.createComponent(AnimeCartoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
