import { FeatureRequestItem } from './../models/feature-request-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestItemService {

  featureRequestItem: FeatureRequestItem;
  apiUrl = 'http://localhost:63024/api/featureRequestItem';
  
  constructor(private http: HttpClient) { }

  public getAll() {
    
    return this.http.get<any>(this.apiUrl);
  }

  updateFeatureRequestItem (featureRequestItem: FeatureRequestItem, id: number): Observable<FeatureRequestItem> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FeatureRequestItem>(url, featureRequestItem, httpOptions);
  }

  addFeatureRequestItem (featureRequestItem: FeatureRequestItem): Observable<FeatureRequestItem> {
    return this.http.post<FeatureRequestItem>(this.apiUrl, featureRequestItem, httpOptions);
  }
    
}
