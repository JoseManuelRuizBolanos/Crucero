import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WonderOfTheSeasPage } from './wonder-of-the-seas.page';

describe('WonderOfTheSeasPage', () => {
  let component: WonderOfTheSeasPage;
  let fixture: ComponentFixture<WonderOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
