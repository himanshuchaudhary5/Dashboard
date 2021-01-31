import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../common/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = "http://192.168.1.101:8080/api/v1/modules";

  constructor(private httpClient : HttpClient) {}

  getModulesByRubId(suiteId:number):Observable<Module[]> {
      const searchUrl = `${this.baseUrl}/${suiteId}`;
      return this.httpClient.get<Module[]>(searchUrl);
  }
}

