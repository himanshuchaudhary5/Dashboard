import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Runhistory } from '../common/runhistory';

@Injectable({
  providedIn: 'root'
})
export class RunhistoryService {

  private baseUrl = "http://192.168.43.245:8080/api/v1/runHistory";

  constructor(private httpClient : HttpClient) { }

  getrunHistory():Observable<GetResponse> {
      return this.httpClient.get<GetResponse>(this.baseUrl);
  }
}

interface GetResponse{
  runhistory: Runhistory[];
}
