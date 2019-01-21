import { Injectable } from '@angular/core';
import { CanActivate,
          ActivatedRouteSnapshot,
          RouterStateSnapshot,
          Router,
          CanLoad, Route } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AuthGuard#canActivate called');
    const url = state.url;
    console.log(this.authService.isLogin);

    if (this.authService.isLogin === '1') {
      console.log('PASS');
      return true;
    } else {
      console.log('FAIL');
      console.log(url);
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }

  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
    if (this.authService.isLogin === '1') {
      console.log('SUCCESS TO LOAD');
      this.authService.redirectUrl = url;
      return true;
    } else {
      console.log('FAIT TO LOAD');
      this.authService.redirectUrl = url;
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
