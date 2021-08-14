import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('auth-token') || '';
    // decode the token to get its payload
    if (token) {
      let tokenPayload: any;
      tokenPayload = decode(token);

      var result = expectedRole.filter((e: any) => tokenPayload.role.indexOf(e) !== -1).length === tokenPayload.role.length;

      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
      }
      else {
        if (result) {
          // this.router.navigate(['home']);
          return true;
        }
        else {
          this.router.navigate(['home']);
          return false;
        }
      }
    }
    else {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}