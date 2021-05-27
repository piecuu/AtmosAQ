import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl: string | undefined;

  constructor(
    private authService: AuthService,
    private tokenStorageService: TokenStorageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/latest';

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.router.navigate([this.returnUrl]);
    }
  }

  onSubmit(): void {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService
      .login(username, password)
      .subscribe((data: AuthenticationResponse) => {
        this.tokenStorageService.saveToken(data.token);
        this.router.navigate([this.returnUrl]);
      });
  }
}
