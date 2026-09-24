import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserProfileApi } from './user-profile-api';

describe('UserProfileApi', () => {
  let component: UserProfileApi;
  let fixture: ComponentFixture<UserProfileApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserProfileApi],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
