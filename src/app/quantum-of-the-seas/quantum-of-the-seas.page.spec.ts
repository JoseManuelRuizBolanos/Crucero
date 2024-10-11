import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuantumOfTheSeasPage } from './quantum-of-the-seas.page';

describe('QuantumOfTheSeasPage', () => {
  let component: QuantumOfTheSeasPage;
  let fixture: ComponentFixture<QuantumOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantumOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
