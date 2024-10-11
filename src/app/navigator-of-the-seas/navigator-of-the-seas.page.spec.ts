import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigatorOfTheSeasPage } from './navigator-of-the-seas.page';

describe('NavigatorOfTheSeasPage', () => {
  let component: NavigatorOfTheSeasPage;
  let fixture: ComponentFixture<NavigatorOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
