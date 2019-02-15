import { Injectable } from '@angular/core';
import { Activity, Activities } from '../models/model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, publishReplay, refCount, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private path = './api/activities.json';

  constructor(private http: HttpClient) { }

  getActivites(): Observable<Activity[]> {
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
