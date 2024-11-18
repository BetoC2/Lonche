import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = `${environment.apiUrl}`;

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authService.getToken() || ''}`,
      'Content-Type': 'application/json',
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', error);
    return throwError(
      () => new Error('An error occurred, please try again later.'),
    );
  }

  get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>,
  ): Observable<T> {
    let httpParams = new HttpParams();

    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.append(key, params[key].toString());
      });
    }

    return this.httpClient
      .get<T>(`${this.url}${endpoint}`, {
        headers: this.getHeaders(),
        params: httpParams,
      })
      .pipe(catchError(this.handleError));
  }

  post<Req, Res>(
    endpoint: string,
    body: Req,
    options?: { headers?: HttpHeaders; withCredentials?: boolean },
  ): Observable<Res> {
    return this.httpClient
      .post<Res>(`${this.url}${endpoint}`, body, options)
      .pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, data: T) {
    return this.httpClient
      .put<T>(`${this.url}${endpoint}`, data, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  delete<T>(endpoint: string, data?: T) {
    return this.httpClient
      .delete<T>(`${this.url}${endpoint}`, {
        headers: this.getHeaders(),
        body: data,
      })
      .pipe(catchError(this.handleError));
  }
}
