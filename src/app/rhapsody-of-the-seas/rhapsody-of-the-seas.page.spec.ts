import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RhapsodyOfTheSeasPage } from './rhapsody-of-the-seas.page';

describe('RhapsodyOfTheSeasPage', () => {
  let component: RhapsodyOfTheSeasPage;
  let fixture: ComponentFixture<RhapsodyOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RhapsodyOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
