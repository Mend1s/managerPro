import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicos } from '../features/servicos/models/servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/'

  getListAllServices(): Observable<Servicos[]> {
    return this.http.get<Servicos[]>(`${this.baseUrl}servicos`)
  }

  getServiceById(id: string): Observable<Servicos> {
    return this.http.get<Servicos>(`${this.baseUrl}servicos/${id}`)
  }

  putService(service: Servicos): Observable<any> {
    return this.http.put(`${this.baseUrl}servicos/${service.id}`, service);
  }

  postService(service: Servicos): Observable<any> {
    return this.http.post(`${this.baseUrl}servicos/`, service);
  }

  deleteService(id: string): Observable<any> {
    return this.http.delete<Servicos>(`${this.baseUrl}servicos/${id}`)
  }
}
