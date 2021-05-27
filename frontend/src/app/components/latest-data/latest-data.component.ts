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
  city: string | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  getLatestData(): void {
    if (this.city != undefined) {
      this.dataService.getLatestData(this.city).subscribe((data) => {
        this.latestDataResponse = data;
      });
    }
  }
}
