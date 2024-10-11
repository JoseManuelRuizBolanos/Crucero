import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllureOfTheSeasPage } from './allure-of-the-seas.page';

describe('AllureOfTheSeasPage', () => {
  let component: AllureOfTheSeasPage;
  let fixture: ComponentFixture<AllureOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AllureOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
