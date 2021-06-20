import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomValuesComponent } from './random-values.component';

describe('RandomValuesComponent', () => {
  let component: RandomValuesComponent;
  let fixture: ComponentFixture<RandomValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RandomValuesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
