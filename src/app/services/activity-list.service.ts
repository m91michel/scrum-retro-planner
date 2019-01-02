import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity, Activities } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {
  private activities: Activity[] = [];
  public activities$ = new Subject<Activity[]>();

  constructor() {
    this.activities$.subscribe((activity: Activity[]) => {
      console.log(activity);
    });
  }

  add(activity: Activity): void {
    this.activities.push(activity);
    this.activities$.next(this.activities);
  }

  get(): Activity[] {
    return this.activities;
  }

  clear(): void {
    this.activities = [];
    this.activities$.next(this.activities);
  }
}
