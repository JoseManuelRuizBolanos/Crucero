import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExplorerOfTheSeasPage } from './explorer-of-the-seas.page';

describe('ExplorerOfTheSeasPage', () => {
  let component: ExplorerOfTheSeasPage;
  let fixture: ComponentFixture<ExplorerOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
