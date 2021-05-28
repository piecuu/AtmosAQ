import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) {}

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveToken(token: string): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
    this.loggedIn.next(true);
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/auth']);
    this.loggedIn.next(false);
  }

  public isAuthenticated(): boolean {
    const helper = new JwtHelperService();

    const token = this.getToken();

    if (token) {
      const isExpired = helper.isTokenExpired(token);

      if (isExpired) {
        this.loggedIn.next(false);
        return false;
      }

      this.loggedIn.next(true);

      return true;
    }
    else {
      return false;
    }
  }
}
