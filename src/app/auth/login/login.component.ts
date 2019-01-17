import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login({username: this.username, password: this.password}).subscribe(res => {
      this.authService.setStatusLogin(res);
    });
  }

  onLogOut() {
    this.authService.logOut();
  }

}
