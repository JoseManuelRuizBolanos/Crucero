import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamarotePage } from './camarote.page';

describe('CamarotePage', () => {
  let component: CamarotePage;
  let fixture: ComponentFixture<CamarotePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CamarotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
