import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { UserApiService } from './help';

describe('UserApiService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient()] });
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
