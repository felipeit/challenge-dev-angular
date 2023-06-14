import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url = 'http://127.0.0.1:8000/api/propostas/'
  constructor(
    private readonly http: HttpClient
  ) { }

  getAll(): Observable<any>{
    return this.http.get(this.url);
  }

  update(id: number, status: string): Observable<any>{
    return this.http.put(`${this.url}${id}/`, {status: status});
  }

  partialUpdate(id: number, data: any): Observable<any>{
    return this.http.patch(`${this.url}${id}/`, data);
  }

  retrieve(id: number): Observable<any>{
    return this.http.get(`${this.url}${id}/`);
  }
}
