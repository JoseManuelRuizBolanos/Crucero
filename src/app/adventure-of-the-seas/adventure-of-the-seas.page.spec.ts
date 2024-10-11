import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureOfTheSeasPage } from './adventure-of-the-seas.page';

describe('AdventureOfTheSeasPage', () => {
  let component: AdventureOfTheSeasPage;
  let fixture: ComponentFixture<AdventureOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
