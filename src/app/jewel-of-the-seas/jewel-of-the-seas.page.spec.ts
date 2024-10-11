import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JewelOfTheSeasPage } from './jewel-of-the-seas.page';

describe('JewelOfTheSeasPage', () => {
  let component: JewelOfTheSeasPage;
  let fixture: ComponentFixture<JewelOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
