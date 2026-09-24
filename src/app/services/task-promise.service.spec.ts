import { TestBed } from '@angular/core/testing';
import { Database } from '@angular/fire/database';
import { getApps, initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { environment } from '../../environments/environment.development';
import { TaskPromiseService } from './task-promise.service';

const firebaseApp = getApps()[0] ?? initializeApp(environment.firebaseConfig);

describe('TaskPromiseService', () => {
  let service: TaskPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Database,
          useValue: getDatabase(firebaseApp),
        },
      ],
    });
    service = TestBed.inject(TaskPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
