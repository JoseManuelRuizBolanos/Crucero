import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FreedomOfTheSeasPage } from './freedom-of-the-seas.page';

describe('FreedomOfTheSeasPage', () => {
  let component: FreedomOfTheSeasPage;
  let fixture: ComponentFixture<FreedomOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FreedomOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
