import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndependenceOfTheSeasPage } from './independence-of-the-seas.page';

describe('IndependenceOfTheSeasPage', () => {
  let component: IndependenceOfTheSeasPage;
  let fixture: ComponentFixture<IndependenceOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependenceOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
