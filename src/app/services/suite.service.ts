import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Suite } from '../common/suite';

@Injectable({
  providedIn: 'root'
})
export class SuiteService {

  private baseUrl = "http://169.254.97.122:8080/api/v1/suites";

  constructor(private httpClient : HttpClient) {}

  getSuitesByRubId(runId:number):Observable<Suite[]> {
      console.log(runId);
      const searchUrl = `${this.baseUrl}/${runId}`;
      return this.httpClient.get<Suite[]>(searchUrl);
  }
}
