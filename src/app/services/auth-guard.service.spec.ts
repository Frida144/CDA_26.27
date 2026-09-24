import { TestBed } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { appConfig } from '../app.config';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: appConfig.providers });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
