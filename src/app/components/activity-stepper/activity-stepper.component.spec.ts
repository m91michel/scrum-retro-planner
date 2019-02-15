import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStepperComponent } from './activity-stepper.component';

describe('ActivityStepperComponent', () => {
  let component: ActivityStepperComponent;
  let fixture: ComponentFixture<ActivityStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
