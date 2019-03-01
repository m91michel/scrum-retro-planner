import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeComponent } from './contribute.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContributeComponent', () => {
  let component: ContributeComponent;
  let fixture: ComponentFixture<ContributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributeComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
