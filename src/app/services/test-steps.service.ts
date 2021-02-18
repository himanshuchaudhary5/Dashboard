import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestSteps } from '../common/test-steps';

@Injectable({
  providedIn: 'root'
})
export class TestStepsService {
  private baseUrl = "http://192.168.1.101:8080/api/v1/test-steps";

  constructor(private httpClient : HttpClient) {}

  getTestCaseByModuleId(testCaseId:number):Observable<TestSteps[]> {
      const searchUrl = `${this.baseUrl}/${testCaseId}`;
      return this.httpClient.get<TestSteps[]>(searchUrl);
  }
}
