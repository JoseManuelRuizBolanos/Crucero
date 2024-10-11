import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarinerOfTheSeasPage } from './mariner-of-the-seas.page';

describe('MarinerOfTheSeasPage', () => {
  let component: MarinerOfTheSeasPage;
  let fixture: ComponentFixture<MarinerOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarinerOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
