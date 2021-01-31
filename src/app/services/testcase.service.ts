import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testcase } from '../common/testcase';

@Injectable({
  providedIn: 'root'
})
export class TestcaseService {
  private baseUrl = "http://192.168.1.101:8080/api/v1/test-cases";

  constructor(private httpClient : HttpClient) {}

  getTestCaseByModuleId(moduleId:number):Observable<Testcase[]> {
      const searchUrl = `${this.baseUrl}/${moduleId}`;
      return this.httpClient.get<Testcase[]>(searchUrl);
  }
}
