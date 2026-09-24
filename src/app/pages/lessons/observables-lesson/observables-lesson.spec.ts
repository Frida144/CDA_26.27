import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObservablesLesson } from './observables-lesson';

describe('ObservablesLesson', () => {
  let component: ObservablesLesson;
  let fixture: ComponentFixture<ObservablesLesson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesLesson],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservablesLesson);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
