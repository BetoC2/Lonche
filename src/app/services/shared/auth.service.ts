import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  observableToken: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  constructor() {
    const token = this.getToken();
    if (token) {
      this.observableToken.next(token);
    }
  }

  getToken(): string | null {
    try {
      return localStorage.getItem('token');
    } catch (error) {
      console.error('Error accessing localStorage', error);
      return null;
    }
  }

  getUserID(): string | null {
    return localStorage.getItem('userID');
  }

  getUserData(): string | null {
    return localStorage.getItem('userData');
  }

  setToken(token: string): void {
    try {
      localStorage.setItem('token', token);
      this.observableToken.next(token);
    } catch (error) {
      console.error('Error setting token in localStorage', error);
    }
  }

  setUserID(userID: string): void {
    try {
      localStorage.setItem('userID', userID);
    } catch (error) {
      console.error('Error setting userID in localStorage', error);
    }
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    try {
      localStorage.removeItem('token');
      localStorage.clear();
      this.observableToken.next(null);
    } catch (error) {
      console.error('Error removing token from localStorage', error);
    }
  }
}
