import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoyagerOfTheSeasPage } from './voyager-of-the-seas.page';

describe('VoyagerOfTheSeasPage', () => {
  let component: VoyagerOfTheSeasPage;
  let fixture: ComponentFixture<VoyagerOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VoyagerOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
