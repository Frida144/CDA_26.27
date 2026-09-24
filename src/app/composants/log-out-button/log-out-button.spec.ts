import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogOutButton } from './log-out-button';
import { appConfig } from '../../app.config';

describe('LogOutButton', () => {
  let component: LogOutButton;
  let fixture: ComponentFixture<LogOutButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogOutButton],
      providers: appConfig.providers,
    }).compileComponents();

    fixture = TestBed.createComponent(LogOutButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
