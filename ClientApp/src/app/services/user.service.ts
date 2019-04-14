import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://0.0.0.0:8081/api/account';

  constructor(private http: HttpClient) { }

  // getAll() {
  //     return this.http.get<User[]>(`${this.apiUrl}/users`);
  // }

  // getById(id: number) {
  //     return this.http.get(`${config.apiUrl}/users/${id}`);
  // }

  register(user: User) {
      return this.http.post(`${this.apiUrl}`, user);
  }

  // update(user: User) {
  //     return this.http.put(`${config.apiUrl}/users/${user.id}`, user);
  // }

  // delete(id: number) {
  //     return this.http.delete(`${config.apiUrl}/users/${id}`);
  // }

}
