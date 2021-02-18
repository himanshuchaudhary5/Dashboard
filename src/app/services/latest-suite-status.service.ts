import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestSuiteStatus } from '../common/latest-suite-status';

@Injectable({
  providedIn: 'root'
})
export class LatestSuiteStatusService {

  private baseUrl = "http://192.168.1.101:8080/api/v1/latestSuites";

  constructor(private httpClient : HttpClient) { }

  getData():Observable<LatestSuiteStatus[]> {
      return this.httpClient.get<LatestSuiteStatus[]>(this.baseUrl);
  }
}
