import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Activity, Activities } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ActivityListService {
  private activities: Activity[] = [];
  public activities$ = new Subject<Activity[]>();

  constructor() { }

  add(activity: Activity): void {
    this.activities.push(activity);
    sessionStorage.setItem('activities', JSON.stringify(this.activities));
    this.activities$.next(this.activities);
  }

  get(): Activity[] {
    const session = sessionStorage.getItem('activities');
    if (session !== null) {
      this.activities = JSON.parse(session);
      this.activities$.next(this.activities);
    }
    return this.activities;
  }

  remove(activity: Activity): void {
    const index = this.activities.indexOf(activity);
    if (index !== -1) {
      this.activities.splice(index, 1);
      sessionStorage.setItem('activities', JSON.stringify(this.activities));
      this.activities$.next(this.activities);
    }
  }

  clear(): void {
    this.activities = [];
    sessionStorage.clear();
    this.activities$.next(this.activities);
  }
}
