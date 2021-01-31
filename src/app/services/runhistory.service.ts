import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Runhistory } from '../common/runhistory';

@Injectable({
  providedIn: 'root'
})
export class RunhistoryService {

  private baseUrl = "http://192.168.1.101:8080/api/v1/runHistory";

  constructor(private httpClient : HttpClient) { }

  getrunHistory():Observable<Runhistory[]> {
      return this.httpClient.get<Runhistory[]>(this.baseUrl);
  }
}