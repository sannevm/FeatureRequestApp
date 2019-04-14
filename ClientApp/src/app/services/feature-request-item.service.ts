import { JwtInterceptor } from './../jwt-interceptor';
import { FeatureRequestItem } from './../models/feature-request-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestItemService {

  featureRequestItem: FeatureRequestItem;
  apiUrl = 'http://0.0.0.0:8081/api/featureRequestItem';
  
  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<any>(this.apiUrl);
  }

  updateFeatureRequestItem (featureRequestItem: FeatureRequestItem, id: number): Observable<FeatureRequestItem> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FeatureRequestItem>(url, featureRequestItem);
  }

  addFeatureRequestItem (featureRequestItem: FeatureRequestItem): Observable<FeatureRequestItem> {
    return this.http.post<FeatureRequestItem>(this.apiUrl, featureRequestItem);
  }
    
}
