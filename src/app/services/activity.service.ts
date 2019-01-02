import { Injectable } from '@angular/core';
import { Activity, Activities } from '../models/model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private path = './api/activities.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Activity[]> {
    return this.http.get<Activities>(this.path)
    .pipe(
      map(res => {
        return res.activities;
      })
    );
  }
}
