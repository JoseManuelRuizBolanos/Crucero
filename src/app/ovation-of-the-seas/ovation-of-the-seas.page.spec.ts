import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OvationOfTheSeasPage } from './ovation-of-the-seas.page';

describe('OvationOfTheSeasPage', () => {
  let component: OvationOfTheSeasPage;
  let fixture: ComponentFixture<OvationOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OvationOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
