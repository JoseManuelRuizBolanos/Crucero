import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnchantmentOfTheSeasPage } from './enchantment-of-the-seas.page';

describe('EnchantmentOfTheSeasPage', () => {
  let component: EnchantmentOfTheSeasPage;
  let fixture: ComponentFixture<EnchantmentOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantmentOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
