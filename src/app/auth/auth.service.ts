import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly JWT_TOKEN = '';
  private readonly REFRESH_TOKEN = '';
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  login(user: { email: string, password: string }): Observable<boolean> {
    return this.http.post<User>(`${this.baseUrl}/auth/login`, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.email, tokens)),
        mapTo(true),
        catchError(err => {
          let error: string;
          try {
            error = err.error.errors[0].title;
          } catch (error) {
            error = null;
          }
          console.error(error);
          this.toastr.error(error, 'Error');
          return of(false);
        }));
  }

  logout(): Observable<boolean> {
    return this.http.post<Logout>(`${this.baseUrl}/auth/logout`, {})
      .pipe(
        tap((e) => console.log(e)),
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          console.error(error.error);
          return of(false);
        }));
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  refreshToken(): Observable<Tokens> {
    return this.http.post<User>(`${this.baseUrl}/auth/refresh`, {})
      .pipe(
        tap((e) => {
          console.log('refreshToken', e);
        }),
        tap((tokens: Tokens) => {
          this.storeJwtToken(tokens.access_token);
        }));
  }

  getJwtToken(): string {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(username: string, tokens: Tokens): void {
    localStorage.setItem('userEmail', username);
    this.storeTokens(tokens);
  }

  private doLogoutUser(): void {
    localStorage.removeItem('userEmail');
    this.removeTokens();
  }

  private storeJwtToken(jwt: string): void {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Tokens): void {
    localStorage.setItem(this.JWT_TOKEN, tokens.access_token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.access_token);
  }

  private removeTokens(): void {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}