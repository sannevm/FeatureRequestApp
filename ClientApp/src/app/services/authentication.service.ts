import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, config } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  private apiURL = 'http://0.0.0.0:8081/api/authentication';
  public currentUser: Observable<User>;
  public loggedIn : boolean;
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  authNavStatus$ = this._authNavStatusSource.asObservable();

  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      return this.http.post<any>(`${this.apiURL}/login`, { username, password })
          .pipe(map(user => {
              if (user) {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  localStorage.setItem('auth_token', user.auth_token);
                  this.currentUserSubject.next(user);
                  this.loggedIn = true;
              }
              return user;
          }));
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() : boolean {
      return this.loggedIn; 
  }
}
