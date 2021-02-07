import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testcase } from '../common/testcase';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {
  private baseUrl = "http://169.254.97.122:8080/api/v1/test-cases";

  constructor(private httpClient : HttpClient) {}

  getTestCaseByModuleId(moduleId:number):Observable<Testcase[]> {
      const searchUrl = `${this.baseUrl}/${moduleId}`;
      return this.httpClient.get<Testcase[]>(searchUrl);
  }
}
