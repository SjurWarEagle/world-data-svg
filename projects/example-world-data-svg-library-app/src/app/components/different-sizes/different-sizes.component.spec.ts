import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentSizesComponent } from './different-sizes.component';

describe('DifferentSizesComponent', () => {
  let component: DifferentSizesComponent;
  let fixture: ComponentFixture<DifferentSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DifferentSizesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
