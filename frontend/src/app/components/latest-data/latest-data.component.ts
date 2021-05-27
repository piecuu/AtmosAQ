import { Component, OnInit } from '@angular/core';
import { GetLatestDto } from 'src/app/@core/models/get-latest-dto';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-latest-data',
  templateUrl: './latest-data.component.html',
  styleUrls: ['./latest-data.component.css'],
})
export class LatestDataComponent implements OnInit {
  latestDataResponse: GetLatestDto | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getLatestData();
  }

  getLatestData(): void {
    this.dataService.getLatestData('London').subscribe((data) => {
      console.log(data);
    });
  }
}
