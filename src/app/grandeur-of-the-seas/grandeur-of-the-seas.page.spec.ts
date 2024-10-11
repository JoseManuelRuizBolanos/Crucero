import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrandeurOfTheSeasPage } from './grandeur-of-the-seas.page';

describe('GrandeurOfTheSeasPage', () => {
  let component: GrandeurOfTheSeasPage;
  let fixture: ComponentFixture<GrandeurOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandeurOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
