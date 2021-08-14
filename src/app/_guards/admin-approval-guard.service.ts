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

export class AdminApprovalGuard implements CanActivate {
  userDetails: any;
  constructor(public auth: AuthService, public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {

    this.userDetails = JSON.parse(localStorage.getItem('auth-user') || '');

    this.auth.userApproval(this.userDetails.id).subscribe(
      data => {
        if (data.admin_approval == true) {
          return true;
        }
        else {
          this.router.navigate(['approval-pending'], { queryParams: { url: this.router.url } });
          return false;
        }
      },
      err => {
        return false;
      });

    return true;
  }
}