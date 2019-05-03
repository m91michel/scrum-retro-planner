import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivityListService } from '@app/services/activity-list.service';
import { Activity } from '@app/models/model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit  {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    activitySelectedCount: Number = 0;

  constructor(
      private breakpointObserver: BreakpointObserver,
      private activityListService: ActivityListService
      ) {}

    ngOnInit(): void {
        this.activityListService.activities$.subscribe((activityList: Activity[]) => {
            this.activitySelectedCount = activityList.length;
        });
    }

}
