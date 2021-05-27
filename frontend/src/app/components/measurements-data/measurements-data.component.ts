import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetMeasurementsDto } from 'src/app/@core/models/get-measurements-dto';
import { DataService } from 'src/app/@core/services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getMeasurementsData(): void {
    let dateFrom = this.range.get('start')?.value;
    let dateTo = this.range.get('end')?.value;
    let city = this.range.get('city')?.value;
    let resultLimit = this.range.get('resultLimit')?.value;
    let sorting = this.range.get('sorting')?.value;

    this.dataService.getMeasurementsData(dateFrom, dateTo, city, resultLimit, sorting).subscribe(
      data => {
        console.log(data);
        this.measurementsData = data;
      }
    )
  }

}
