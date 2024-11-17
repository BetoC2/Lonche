import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private observableToken: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor() {
    const token = this.getTokenFromStorage();
    if (token) {
      this.observableToken.next(token);
    }
  }

  private getTokenFromStorage(): string | null {
    try {
      return localStorage.getItem('token');
    } catch (error) {
      console.error('Error accessing localStorage', error);
      return null;
    }
  }

  getToken(): Observable<string | null> {
    return this.observableToken.asObservable();
  }

  setToken(token: string): void {
    try {
      localStorage.setItem('token', token);
      this.observableToken.next(token);
    } catch (error) {
      console.error('Error setting token in localStorage', error);
    }
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    try {
      localStorage.removeItem('token');
      this.observableToken.next(null);
    } catch (error) {
      console.error('Error removing token from localStorage', error);
    }
  }
}
