import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {
  serverUrl = 'http://localhost:3000/angular';

  constructor(private http: HttpClient) { }

  getCrisisList(): Observable<any> {
    return this.http.get(`${this.serverUrl}/crisis`);
  }

  getCrisis(crisis_id): Observable<any> {
    return this.http.get(`${this.serverUrl}/crisis/${crisis_id}`);
  }
}
