import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationResponse } from 'src/app/@core/models/authentication-response';
import { AuthService } from 'src/app/@core/services/auth.service';
import { TokenStorageService } from 'src/app/@core/services/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService
      .login(username, password)
      .subscribe((data: AuthenticationResponse) => {
        this.tokenStorageService.saveToken(data.token);
      });
  }
}
