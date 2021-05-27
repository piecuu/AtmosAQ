import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMeasurementsDto } from 'src/app/@core/models/get-measurements-dto';
import { DataService } from 'src/app/@core/services/data.service';
import { TokenStorageService } from 'src/app/@core/services/token-storage.service';

interface Sorting {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-measurements-data',
  templateUrl: './measurements-data.component.html',
  styleUrls: ['./measurements-data.component.css']
})
export class MeasurementsDataComponent implements OnInit {
  measurementsData: GetMeasurementsDto | undefined;
  isLoading: boolean = false;
  returnUrl: string | undefined;

  sortings: Sorting[] = [
    { value: 'asc', viewValue: 'Ascening' },
    { value: 'desc', viewValue: 'Descending' }
  ]

  range = new FormGroup({
    city: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    resultLimit: new FormControl('', Validators.required),
    sorting: new FormControl('', Validators.required),
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

  ngOnInit(): void {
  }

  checkAuth(): void {
    const isAuthenticated = this.tokenStorageService.isAuthenticated();

    if (!isAuthenticated) {
      this.router.navigate([this.returnUrl]);
    }
  }

  getMeasurementsData(): void {
    this.isLoading = true;

    let dateFrom = this.range.get('start')?.value;
    let dateTo = this.range.get('end')?.value;
    let city = this.range.get('city')?.value;
    let resultLimit = this.range.get('resultLimit')?.value;
    let sorting = this.range.get('sorting')?.value;

    this.dataService.getMeasurementsData(dateFrom, dateTo, city, resultLimit, sorting).subscribe(
      data => {
        this.measurementsData = data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    )
  }
}
