import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadianceOfTheSeasPage } from './radiance-of-the-seas.page';

describe('RadianceOfTheSeasPage', () => {
  let component: RadianceOfTheSeasPage;
  let fixture: ComponentFixture<RadianceOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RadianceOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
