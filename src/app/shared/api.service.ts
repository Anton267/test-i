import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  public getFormList(): Observable<FormList> {
    const url = this.baseUrl + '/form_fields';
    return this.http.get<FormList>(url);
  }

  public getForms(): Observable<Forms> {
    const url = this.baseUrl + '/forms';
    return this.http.get<Forms>(url);
  }

  public createForm(body: CreateFormBody): Observable<Form | Errors> {
    const url = this.baseUrl + '/forms';
    return this.http.post<Form>(url, body).pipe(
      tap(() => this.toastr.success('Success')),
      catchError((err: Errors) => {
        let error: string;
        try {
          error = err.error.errors[0].title;
        } catch (error) {
          error = null;
        }
        console.error(error);
        this.toastr.error(error, 'Error');
        return of(err);
      })
    );
  }

  public formId(id: number | string): Observable<Form | Errors> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.get<Form>(url).pipe(
      tap(() => this.toastr.success('Success')),
      catchError((err: Errors) => {
        let error: string;
        try {
          error = err.error.errors[0].title;
        } catch (error) {
          error = null;
        }
        console.error(error);
        this.toastr.error(error, 'Error');
        return of(err);
      })
    );
  }

  public updateForm(body: CreateFormBody, id: number): Observable<Form | Errors> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.post<Form>(url, body).pipe(
      tap(() => this.toastr.success('Success')),
      catchError((err: Errors) => {
        let error: string;
        try {
          error = err.error.errors[0].title;
        } catch (error) {
          error = null;
        }
        console.error(error);
        this.toastr.error(error, 'Error');
        return of(err);
      })
    );
  }

  public deleteForm(id: number | string): Observable<void | Errors> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.delete<void>(url).pipe(
      tap(() => this.toastr.success('Success')),
      catchError((err: Errors) => {
        let error: string;
        try {
          error = err.error.errors[0].title;
        } catch (error) {
          error = null;
        }
        console.error(error);
        this.toastr.error(error, 'Error');
        return of(err);
      })
    );
  }

}
