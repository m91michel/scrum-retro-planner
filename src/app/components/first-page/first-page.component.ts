import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/model';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  public activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.activityService.getData().subscribe(activities => {
      console.log(activities.length);
      this.activities = activities;
    });
  }
}
