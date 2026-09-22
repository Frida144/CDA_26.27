import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TpCompComm } from './tp-comp-comm';

describe('TpCompComm', () => {
  let component: TpCompComm;
  let fixture: ComponentFixture<TpCompComm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TpCompComm],
    }).compileComponents();

    fixture = TestBed.createComponent(TpCompComm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
