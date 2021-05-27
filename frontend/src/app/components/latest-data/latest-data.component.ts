import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetLatestDto } from 'src/app/@core/models/get-latest-dto';
import { DataService } from 'src/app/@core/services/data.service';
import { TokenStorageService } from 'src/app/@core/services/token-storage.service';

@Component({
  selector: 'app-latest-data',
  templateUrl: './latest-data.component.html',
  styleUrls: ['./latest-data.component.css'],
})
export class LatestDataComponent implements OnInit {
  latestDataResponse: GetLatestDto | undefined;
  isLoading: boolean = false;
  returnUrl = '';

  latestForm = new FormGroup({
    city: new FormControl('', Validators.required),
    resultLimit: new FormControl('', Validators.required)
  });

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorageService: TokenStorageService
    ) {
      this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/auth';
      this.checkAuth();
    }

  ngOnInit(): void {}

  checkAuth(): void {
    const isAuthenticated = this.tokenStorageService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate([this.returnUrl]);
    }
  }

  getLatestData(): void {
    this.isLoading = true;

    let city = this.latestForm.get('city')?.value;
    let resultLimit = this.latestForm.get('resultLimit')?.value

    this.dataService.getLatestData(city, resultLimit).subscribe((data) => {
      this.latestDataResponse = data;
      this.isLoading = false;
    },
    error => {
      this.isLoading = false;
    });
  }
}
