import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serverUrl = 'http://localhost:3000/auth';
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(object) {
    return this.http.post(`${this.serverUrl}`, object);
  }

  logOut() {
    localStorage.clear();
  }

  setStatusLogin(status) {
    status.valid === 1 ? localStorage.setItem('isLogin', 'true') : localStorage.setItem('isLogin', 'false');
  }

}
