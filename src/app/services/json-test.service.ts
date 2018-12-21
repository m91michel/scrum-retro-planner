import { Injectable } from '@angular/core';
import { Element, Elements } from '../models/model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonTestService {
  private path = './api/db.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Element[]> {
    return this.http.get<Elements>(this.path)
    .pipe(
      map(res => {
        return res.elements;
      })
    );
  }
}
