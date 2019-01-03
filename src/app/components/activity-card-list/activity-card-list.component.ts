import { Component, OnInit, Input } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { ActivityListService } from '../../services/activity-list.service';
import { Activity } from '../../models/model';
import { catchError, map, tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-activity-card-list',
  templateUrl: './activity-card-list.component.html',
  styleUrls: ['./activity-card-list.component.scss']
})
export class ActivityCardListComponent implements OnInit {
  public activities: Activity[];
  @Input() type: string = 'checkIn';

  constructor(
    private activityService: ActivityService,
    private activityListService: ActivityListService
  ) { }

  ngOnInit() {
    this.getActivites(this.type);
  }

  addAction(activity: Activity) {
    console.log('item: ' + activity);
    this.activityListService.add(activity);
  }

  private getActivites(type: string) {
    this.activityService.getActivites()
      .pipe(
        map(list => list.filter(a => a.type == type))
      )
      .subscribe(activities => {
        console.log('type: ' + this.type + ' - ' + activities.length);
        this.activities = activities;
      });
  }
}
