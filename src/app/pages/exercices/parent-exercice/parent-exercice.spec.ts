import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentExercice } from './parent-exercice';

describe('ParentExercice', () => {
  let component: ParentExercice;
  let fixture: ComponentFixture<ParentExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
