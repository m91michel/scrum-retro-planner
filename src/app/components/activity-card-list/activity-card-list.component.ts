import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityListService } from '../../services/activity-list.service';
import { Activity } from '../../models/model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activity-card-list',
  templateUrl: './activity-card-list.component.html',
  styleUrls: ['./activity-card-list.component.scss']
})
export class ActivityCardListComponent implements OnInit {
  public activities: Activity[];
  @Input() type = 'checkIn';
  @Output() nextStep = new EventEmitter<void>();

  constructor(
    private activityService: ActivityService,
    private activityListService: ActivityListService
  ) { }

  ngOnInit() {
    this.getActivities(this.type);
  }

  addAction(activity: Activity) {
    this.activityListService.add(activity);
    this.nextStep.emit();
  }

  private getActivities(type: string) {
    this.activityService.getActivities()
      .pipe(
        map(list => list.filter(a => a.type === type))
      )
      .subscribe(activities => {
        console.log('type: ' + this.type + ' - ' + activities.length);
        this.activities = activities;
      });
  }
}
