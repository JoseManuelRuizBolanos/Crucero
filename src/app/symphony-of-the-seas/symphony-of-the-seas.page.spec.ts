import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SymphonyOfTheSeasPage } from './symphony-of-the-seas.page';

describe('SymphonyOfTheSeasPage', () => {
  let component: SymphonyOfTheSeasPage;
  let fixture: ComponentFixture<SymphonyOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SymphonyOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
