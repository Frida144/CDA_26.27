import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListRendering } from './list-rendering';

describe('ListRendering', () => {
  let component: ListRendering;
  let fixture: ComponentFixture<ListRendering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRendering],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRendering);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
