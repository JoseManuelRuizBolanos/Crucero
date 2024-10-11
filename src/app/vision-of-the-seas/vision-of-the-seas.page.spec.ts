import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisionOfTheSeasPage } from './vision-of-the-seas.page';

describe('VisionOfTheSeasPage', () => {
  let component: VisionOfTheSeasPage;
  let fixture: ComponentFixture<VisionOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
