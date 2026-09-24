import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsFormulaire } from './signals-formulaire';

describe('SignalsFormulaire', () => {
  let component: SignalsFormulaire;
  let fixture: ComponentFixture<SignalsFormulaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFormulaire],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsFormulaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
