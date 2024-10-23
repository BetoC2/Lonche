import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Para rutas proteguidas, guardar cookie

// Login service
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  // canActivate(): Observable<boolean> {
  //   return this.loginService.isLoggedIn().pipe(
  //     map((isLoggedIn) => {
  //       if (isLoggedIn) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //     })
  //   );
  // }

  // getAll(): Observable<User[]> {
  //   const url = `${environment.apiUrl}login`;
  //   return this.httpClient.get<User[]>(url);
  // }
}
