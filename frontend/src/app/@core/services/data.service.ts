import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetAveragesQuery } from '../models/get-averages-query';
import { GetLatestDto } from '../models/get-latest-dto';
import { GetLatestQuery } from '../models/get-latest-query';
import { GetMeasurementsDto } from '../models/get-measurements-dto';
import { GetMeasurementsQuery } from '../models/get-measurements-query';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = `${environment.apiUrl}data/`;

  constructor(private httpClient: HttpClient) { }

  getLatestData(city: string): Observable<any> {
    let body: GetLatestQuery = {
      city: city
    };

    return this.httpClient.post<GetLatestDto>(
      this.apiUrl + 'latest',
      body,
      httpOptions
    );
  }

  getMeasurementsData(dateFrom: Date, dateTo: Date, city: string): Observable<any> {
    let body: GetMeasurementsQuery = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      city: city
    }

    return this.httpClient.post<GetMeasurementsDto>(
      this.apiUrl + 'measurements',
      body,
      httpOptions
    );
  }

  getAveragesData(dateFrom: Date, dateTo: Date, country: string): Observable<any> {
    let body: GetAveragesQuery = {
      dateFrom: dateFrom,
      dateTo: dateTo,
      country: country
    }

    return this.httpClient.post<GetMeasurementsDto>(
      this.apiUrl + 'averages',
      body,
      httpOptions
    );
  }
}
