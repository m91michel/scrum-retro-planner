import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { ActivityService } from '../../services/activity.service';
import { ActivityListService } from '../../services/activity-list.service';
import { Activity } from '../../models/model';

import { ActivityCardListComponent } from './activity-card-list.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

xdescribe('ActivityCardListComponent', () => {
  let component: ActivityCardListComponent;
  let fixture: ComponentFixture<ActivityCardListComponent>;
  let debugElement: DebugElement;
  let activityService: ActivityService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityCardListComponent, ActivityCardComponent ],
      imports: [ MatCardModule, MatIconModule, MatChipsModule ],
      providers: [
        ActivityService,
        ActivityListService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    debugElement = fixture.debugElement;
    activityService = debugElement.injector.get(ActivityService);
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
