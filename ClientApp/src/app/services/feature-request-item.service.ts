import { JwtInterceptor } from './../jwt-interceptor';
import { FeatureRequestItem } from './../models/feature-request-item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { headersToString } from 'selenium-webdriver/http';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': localStorage.getItem('auth_token')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class FeatureRequestItemService {

  featureRequestItem: FeatureRequestItem;
  apiUrl = 'http://localhost:63024/api/featureRequestItem';
  
  constructor(private http: HttpClient) { }

  public getAll() {
    console.log(localStorage.getItem('auth_token')); //Gets the correct token
    // console.log(httpOptions.headers.get('Authorization')); Gets the correct token
    return this.http.get<any>(this.apiUrl);
  }

  updateFeatureRequestItem (featureRequestItem: FeatureRequestItem, id: number): Observable<FeatureRequestItem> {
    // httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FeatureRequestItem>(url, featureRequestItem);
  }

  addFeatureRequestItem (featureRequestItem: FeatureRequestItem): Observable<FeatureRequestItem> {
    // return this.http.post<FeatureRequestItem>(this.apiUrl, featureRequestItem, httpOptions);
    return this.http.post<FeatureRequestItem>(this.apiUrl, featureRequestItem);
  }
    
}
