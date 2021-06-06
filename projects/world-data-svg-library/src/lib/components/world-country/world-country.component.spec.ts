import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCountryComponent } from './world-country.component';

describe('WorldCountryComponent', () => {
  let component: WorldCountryComponent;
  let fixture: ComponentFixture<WorldCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
