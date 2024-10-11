import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconOfTheSeasPage } from './icon-of-the-seas.page';

describe('IconOfTheSeasPage', () => {
  let component: IconOfTheSeasPage;
  let fixture: ComponentFixture<IconOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
