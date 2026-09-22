import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildExercice } from './child-exercice';

describe('ChildExercice', () => {
  let component: ChildExercice;
  let fixture: ComponentFixture<ChildExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildExercice],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
