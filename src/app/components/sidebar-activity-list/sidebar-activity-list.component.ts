import { Component, OnInit } from '@angular/core';
import { ActivityListService } from '../../services/activity-list.service';
import { Activity } from '../../models/model';

@Component({
  selector: 'app-sidebar-activity-list',
  templateUrl: './sidebar-activity-list.component.html',
  styleUrls: ['./sidebar-activity-list.component.scss']
})
export class SidebarActivityListComponent implements OnInit {
  public activities: Activity[] = [];

  constructor(private activityListService: ActivityListService) { }

  ngOnInit() {
    this.activityListService.activities$.subscribe((activityList: Activity[]) => {
      this.activities = activityList;
    });
  }

  removeItem(activity: Activity): void {
    this.activityListService.remove(activity);
  }

  clear(): void {
    this.activityListService.clear();
  }
}
