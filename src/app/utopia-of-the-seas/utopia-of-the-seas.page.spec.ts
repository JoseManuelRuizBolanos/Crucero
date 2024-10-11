import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtopiaOfTheSeasPage } from './utopia-of-the-seas.page';

describe('UtopiaOfTheSeasPage', () => {
  let component: UtopiaOfTheSeasPage;
  let fixture: ComponentFixture<UtopiaOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtopiaOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
