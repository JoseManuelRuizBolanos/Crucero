import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OasisOfTheSeasPage } from './oasis-of-the-seas.page';

describe('OasisOfTheSeasPage', () => {
  let component: OasisOfTheSeasPage;
  let fixture: ComponentFixture<OasisOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OasisOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
