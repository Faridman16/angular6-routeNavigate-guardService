import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private route: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authService.logOut();
    this.route.navigate(['/login']);
  }

}
