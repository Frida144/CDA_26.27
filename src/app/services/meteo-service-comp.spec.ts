import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpApi } from './meteo-service-comp';

describe('HttpApi', () => {
  let component: HttpApi;
  let fixture: ComponentFixture<HttpApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ providers: [provideHttpClient()] }).compileComponents();
    fixture = TestBed.createComponent(HttpApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
