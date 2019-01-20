import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login({username: this.username, password: this.password}).subscribe(res => {
      this.authService.setStatusLogin(res);
      const redirect = localStorage.getItem('isLogin') === '1' ? this.authService.redirectUrl : '/heroes';
      console.log(redirect);
      this.router.navigate([redirect]);
    });
  }

  onLogOut() {
    this.authService.logOut();
  }

}
