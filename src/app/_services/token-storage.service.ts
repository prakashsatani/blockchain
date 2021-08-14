import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
const TOKEN_KEY = 'auth-token';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    localStorage.clear();
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getRole(): string | null {
    const token = localStorage.getItem('auth-token') || '';
    if (token) {
      let tokenPayload: any;
      tokenPayload = decode(token);
      return tokenPayload.role[0];
    } else {
      return '';
    }
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
