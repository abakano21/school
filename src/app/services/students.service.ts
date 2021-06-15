import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://test-university-laravel.herokuapp.com/api/students';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Student[]> {
    return this.http.get<Student[]>(baseUrl);
  }
  get(id: any): Observable<Student> {
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
  findByTitle(first_name: any): Observable<Student[]> {
    return this.http.get<Student[]>(`${baseUrl}?first_name=${first_name}`);
  }
}
