import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrillianceOfTheSeasPage } from './brilliance-of-the-seas.page';

describe('BrillianceOfTheSeasPage', () => {
  let component: BrillianceOfTheSeasPage;
  let fixture: ComponentFixture<BrillianceOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrillianceOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
