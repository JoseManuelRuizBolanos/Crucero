import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OdysseyOfTheSeasPage } from './odyssey-of-the-seas.page';

describe('OdysseyOfTheSeasPage', () => {
  let component: OdysseyOfTheSeasPage;
  let fixture: ComponentFixture<OdysseyOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OdysseyOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
