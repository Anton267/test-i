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


}
