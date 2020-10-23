import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserFormGuard implements CanActivate {

  constructor(
    private authService: AuthService, private router: Router
  ) { }

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/');
    }
    return this.authService.isLoggedIn();
  }

}
