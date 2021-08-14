import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, RouterModule, CanActivate } from '@angular/router';
import { AppHttpService } from '../_helpers/app-http.service';

const jwtHelper = new JwtHelperService();

const AUTH_API = 'https://api.blockchainmind.com/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, public router: Router, private httpService: AppHttpService) { }

  // login(username: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signin', {
  //     username,
  //     password
  //   }, httpOptions);
  // }

  handleError(error: Response | any) {
    const body = JSON.parse(JSON.stringify(error)) || '';
    return Observable.throw(body);
  }

  studentLogin(user: any): Observable<any> {
    return this.httpService.post('auth/student/signin', user);
  }

  verifyLogin(user: any): Observable<any> {
    return this.httpService.post('auth/verifyLogin', user);
  }

  studentRegister(user: any): Observable<any> {
    return this.httpService.post('auth/student/signup', user);
  }

  tutorLogin(user: any): Observable<any> {
    return this.httpService.post('auth/tutor/signin', user);
  }

  tutorRegister(user: any): Observable<any> {
    return this.httpService.post('auth/tutor/signup', user);
  }

  superAdminLogin(user: any): Observable<any> {
    return this.httpService.post('auth/admin/signin', user);
  }

  superAdminRegister(user: any): Observable<any> {
    return this.httpService.post('auth/admin/signup', user);
  }

  userApproval(userId: any): Observable<any> {
    return this.httpService.get('auth/user/userApproval/' + userId);
  }

  // register(username: string, email: string, password: string): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username,
  //     email,
  //     password
  //   }, httpOptions);
  // }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('auth-token') || '';
    // Check whether the token is expired and return
    // true or false
    if (token == '') {
      // this.router.navigate(['login']);
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }
}
