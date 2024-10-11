import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SerenadeOfTheSeasPage } from './serenade-of-the-seas.page';

describe('SerenadeOfTheSeasPage', () => {
  let component: SerenadeOfTheSeasPage;
  let fixture: ComponentFixture<SerenadeOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SerenadeOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
