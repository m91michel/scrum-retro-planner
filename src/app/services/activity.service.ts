import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, publishReplay, refCount, take } from 'rxjs/operators';
import { Activity, Activities } from '@app/models/model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private path = './api/activities.json';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activities>(this.path)
    .pipe(
      map(res => {
        return res.results;
      }),
      publishReplay(1),
      refCount(),
      take(1),
    );
  }
}
