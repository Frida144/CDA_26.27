import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoolEval } from './cool-eval';

describe('CoolEval', () => {
  let component: CoolEval;
  let fixture: ComponentFixture<CoolEval>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolEval],
    }).compileComponents();

    fixture = TestBed.createComponent(CoolEval);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
