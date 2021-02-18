import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Overall } from '../common/overall';

@Injectable({
  providedIn: 'root'
})
export class OverallService {

  private baseUrl = "http://192.168.1.101:8080/api/v1/overAllStatus";

  constructor(private httpClient : HttpClient) { }

  getData():Observable<Overall> {
      return this.httpClient.get<Overall>(this.baseUrl);
  }
}
