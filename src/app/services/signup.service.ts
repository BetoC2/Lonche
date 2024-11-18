import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { AuthService } from './shared/auth.service';
import { Observable } from 'rxjs';
import { HttpService } from './shared/http-service.service'; // Importa tu HttpService
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(
    private httpService: HttpService,
    private authService: AuthService,
  ) {}

  register(userData: User): Observable<{ token?: string }> {
    return this.httpService
      .post<
        User,
        { token?: string; user?: User }
      >('register', userData, { withCredentials: true })
      .pipe(
        map((response) => {
          if (response.token) {
            this.authService.setToken(response.token);
            const user = response.user as unknown as {
              _doc?: { _id?: string };
            };
            const userID = user?._doc?._id || '';
            this.authService.setUserID(userID);
          }
          return response;
        }),
        catchError((error) => {
          console.error('Error during user registration:', error);
          throw error;
        }),
      );
  }
}
