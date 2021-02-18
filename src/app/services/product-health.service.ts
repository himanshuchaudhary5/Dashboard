import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductHealth } from '../common/product-health';

@Injectable({
  providedIn: 'root'
})
export class ProductHealthService {

  private baseUrl = "http://192.168.1.101:8080/api/v1/health";

  constructor(private httpClient : HttpClient) { }

  getData():Observable<ProductHealth[]> {
      return this.httpClient.get<ProductHealth[]>(this.baseUrl);
  }
}
