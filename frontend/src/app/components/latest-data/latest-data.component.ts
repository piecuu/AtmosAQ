import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetLatestDto } from 'src/app/@core/models/get-latest-dto';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-latest-data',
  templateUrl: './latest-data.component.html',
  styleUrls: ['./latest-data.component.css'],
})
export class LatestDataComponent implements OnInit {
  latestDataResponse: GetLatestDto | undefined;

  latestForm = new FormGroup({
    city: new FormControl('', Validators.required),
    resultLimit: new FormControl('', Validators.required)
  });

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getLatestData(): void {
    let city = this.latestForm.get('city')?.value;
    let resultLimit = this.latestForm.get('resultLimit')?.value

    console.log(city);
    console.log(resultLimit);

    this.dataService.getLatestData(city, resultLimit).subscribe((data) => {
      this.latestDataResponse = data;
    });
  }
}
