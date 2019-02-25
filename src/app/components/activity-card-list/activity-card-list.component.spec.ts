import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatIconModule, MatChipsModule } from '@angular/material';
import { ActivityService } from '../../services/activity.service';
import { ActivityListService } from '../../services/activity-list.service';
import { Activity } from '../../models/model';

import { ActivityCardListComponent } from './activity-card-list.component';
import { DebugElement } from '@angular/core';
import { ActivityCardComponent } from '../activity-card/activity-card.component';

fdescribe('ActivityCardListComponent', () => {
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
      ]
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
