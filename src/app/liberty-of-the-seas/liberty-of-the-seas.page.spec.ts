import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibertyOfTheSeasPage } from './liberty-of-the-seas.page';

describe('LibertyOfTheSeasPage', () => {
  let component: LibertyOfTheSeasPage;
  let fixture: ComponentFixture<LibertyOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LibertyOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
