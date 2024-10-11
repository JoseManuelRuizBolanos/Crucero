import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarmonyOfTheSeasPage } from './harmony-of-the-seas.page';

describe('HarmonyOfTheSeasPage', () => {
  let component: HarmonyOfTheSeasPage;
  let fixture: ComponentFixture<HarmonyOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HarmonyOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
