import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/users/'; // URL to web API

  constructor(private http: HttpClient) { }

  createUser(userData: {username: string, email: string, password: string}): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}