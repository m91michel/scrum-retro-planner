import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Activity } from '../../models/model';

import { ActivityCardListComponent } from './activity-card-list.component';

xdescribe('ActivityCardListComponent', () => {
  let component: ActivityCardListComponent;
  let fixture: ComponentFixture<ActivityCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
