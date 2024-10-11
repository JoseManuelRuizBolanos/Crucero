import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarOfTheSeasPage } from './star-of-the-seas.page';

describe('StarOfTheSeasPage', () => {
  let component: StarOfTheSeasPage;
  let fixture: ComponentFixture<StarOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StarOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
