import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnthemOfTheSeasPage } from './anthem-of-the-seas.page';

describe('AnthemOfTheSeasPage', () => {
  let component: AnthemOfTheSeasPage;
  let fixture: ComponentFixture<AnthemOfTheSeasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AnthemOfTheSeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
