import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpectrumOfTheSeasPage } from './spectrum-of-the-seas.page';

describe('SpectrumOfTheSeasPage', () => {
  let component: SpectrumOfTheSeasPage;
  let fixture: ComponentFixture<SpectrumOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectrumOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
