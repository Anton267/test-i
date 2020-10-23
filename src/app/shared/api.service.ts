import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getFormList(): Observable<FormList> {
    const url = this.baseUrl + '/form_fields';
    return this.http.get<FormList>(url);
  }

  public getForms(): Observable<Form> {
    const url = this.baseUrl + '/forms';
    return this.http.get<Form>(url);
  }

  public createForm(body: CreateFormBody): Observable<CreateForm> {
    const url = this.baseUrl + '/forms';
    return this.http.post<CreateForm>(url, body);
  }

  public formId(id: number | string): Observable<CreateForm> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.get<CreateForm>(url);
  }

  public updateForm(body: CreateFormBody, id: number): Observable<CreateForm> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.post<CreateForm>(url, body);
  }

  public deleteForm(id: number | string): Observable<void> {
    const url = this.baseUrl + `/forms/${id}`;
    return this.http.delete<void>(url);
  }

}
