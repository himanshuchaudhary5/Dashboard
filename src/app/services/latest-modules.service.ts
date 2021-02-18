import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LatestModules } from '../common/latest-modules';

@Injectable({
  providedIn: 'root'
})
export class LatestModulesService {

  
  private baseUrl = "http://192.168.1.101:8080/api/v1/latestModules";

  constructor(private httpClient : HttpClient) { }

  getData():Observable<LatestModules[]> {
      return this.httpClient.get<LatestModules[]>(this.baseUrl);
  }
}
