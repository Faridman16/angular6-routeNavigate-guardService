import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = localStorage.getItem('isLogin');
  serverUrl = 'http://localhost:3000/auth';
  redirectUrl: string;

  constructor(private http: HttpClient) { }

  login(object) {
    return this.http.post(`${this.serverUrl}`, object);
  }

  logOut() {
    localStorage.clear();
    this.isLogin = '0';
  }

  setStatusLogin(status) {
    status.valid === 1 ? localStorage.setItem('isLogin', '1') : localStorage.setItem('isLogin', '2');
    this.isLogin = localStorage.getItem('isLogin');
  }

}
