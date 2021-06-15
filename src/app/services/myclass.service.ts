import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Myclass } from '../models/myclass.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://test-university-laravel.herokuapp.com/api/classes';

@Injectable({
  providedIn: 'root',
})
export class MyclassService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Myclass[]> {
    return this.http.get<Myclass[]>(baseUrl);
  }
  get(id: any): Observable<Myclass> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
