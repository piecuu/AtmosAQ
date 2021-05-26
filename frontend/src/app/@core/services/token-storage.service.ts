import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
}
