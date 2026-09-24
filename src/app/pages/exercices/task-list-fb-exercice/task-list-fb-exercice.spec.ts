import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Database } from '@angular/fire/database';
import { getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../../../../environments/environment.development';
import { TaskListFbExercice } from './task-list-fb-exercice';

const firebaseApp = getApps()[0] ?? initializeApp(environment.firebaseConfig);

describe('TaskListFbExercice', () => {
  let component: TaskListFbExercice;
  let fixture: ComponentFixture<TaskListFbExercice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListFbExercice],
      providers: [
        {
          provide: Database,
          useValue: getDatabase(firebaseApp),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskListFbExercice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
