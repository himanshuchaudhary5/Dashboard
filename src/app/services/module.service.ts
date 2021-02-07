import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Module } from '../common/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = "http://169.254.97.122:8080/api/v1/modules";

  constructor(private httpClient : HttpClient) {}

  getModulesByRubId(suiteId:number):Observable<Module[]> {
      const searchUrl = `${this.baseUrl}/${suiteId}`;
      return this.httpClient.get<Module[]>(searchUrl);
  }
}

