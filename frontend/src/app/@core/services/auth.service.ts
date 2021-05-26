import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationRequest } from '../models/authentication-request';
import { AuthenticationResponse } from '../models/authentication-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}auth`;

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    let body: AuthenticationRequest = {
      username: username,
      password: password,
    };

    return this.httpClient.post<AuthenticationResponse>(
      this.apiUrl,
      body,
      httpOptions
    );
  }
}
