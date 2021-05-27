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
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl = `${environment.apiUrl}data/`;

  constructor(private httpClient: HttpClient) {}

  getLatestData(city: string, limitResult: number): Observable<any> {
    const query: GetLatestQuery = {
      city: city,
      resultLimit: limitResult
    };

    return this.httpClient.get<GetLatestDto>(this.apiUrl + 'latest', {
      params: { ...query },
    });
  }

  getMeasurementsData(
    dateFrom: Date,
    dateTo: Date,
    city: string,
    limitResult: number,
    sortBy: string
  ): Observable<any> {
    const query: GetMeasurementsQuery = {
      dateFrom: dateFrom.toDateString(),
      dateTo: dateTo.toDateString(),
      city: city,
      resultLimit: limitResult,
      sortBy: sortBy
    };

    return this.httpClient.get<GetMeasurementsDto>(
      this.apiUrl + 'measurements',
      { params: { ...query } }
    );
  }

  getAveragesData(
    dateFrom: Date,
    dateTo: Date,
    country: string,
    limitResult: number
  ): Observable<any> {
    const query: GetAveragesQuery = {
      dateFrom: dateFrom.toUTCString(),
      dateTo: dateTo.toUTCString(),
      country: country,
      resultLimit: limitResult
    };

    return this.httpClient.get<GetMeasurementsDto>(this.apiUrl + 'averages', {
      params: { ...query },
    });
  }
}
