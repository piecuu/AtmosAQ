import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetMeasurementsDto } from 'src/app/@core/models/get-measurements-dto';
import { DataService } from 'src/app/@core/services/data.service';

@Component({
  selector: 'app-measurements-data',
  templateUrl: './measurements-data.component.html',
  styleUrls: ['./measurements-data.component.css']
})
export class MeasurementsDataComponent implements OnInit {
  measurementsData: GetMeasurementsDto | undefined;

  range = new FormGroup({
    city: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    resultLimit: new FormControl()
  });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getMeasurementsData(): void {
    let dateFrom = this.range.get('start')?.value;
    let dateTo = this.range.get('end')?.value;
    let city = this.range.get('city')?.value;
    let resultLimit = this.range.get('resultLimit')?.value;

    this.dataService.getMeasurementsData(dateFrom, dateTo, city, resultLimit).subscribe(
      data => {
        console.log(data);
        this.measurementsData = data;
      }
    )
  }

}
