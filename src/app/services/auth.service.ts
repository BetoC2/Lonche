import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../types/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<User[]> {
    const url = `${environment.apiUrl}users`;
    return this.httpClient.get<User[]>(url);
  }
}
