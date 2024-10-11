import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarotesPage } from './camarotes.page';

describe('CamarotesPage', () => {
  let component: CamarotesPage;
  let fixture: ComponentFixture<CamarotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
