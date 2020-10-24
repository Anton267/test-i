import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private authService: AuthService, private router: Router
  ) { }

  canActivate(): Observable<boolean> {
    return of(this.authService.isLoggedIn()).pipe(
      tap(isLogged => {
        if (isLogged) {
          this.router.navigateByUrl('/user');
        }
      }),
      map(isLogged => !isLogged)
    );
  }
}
