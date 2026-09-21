import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttributesBindingExercice } from './attributes-binding-exercice';

describe('AttributesBindingExercice', () => {
  let component: AttributesBindingExercice;
  let fixture: ComponentFixture<AttributesBindingExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributesBindingExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributesBindingExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
