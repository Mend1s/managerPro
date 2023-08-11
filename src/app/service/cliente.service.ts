import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../features/cliente/models/client';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000'

  getListClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.baseUrl}/client`)
  }

  getClientById(id: string): Observable<Client>{
    return this.http.get<Client>(`${this.baseUrl}/client/${id}`)
  }

  putClient(client: Client): Observable<any>{
    return this.http.put(`${this.baseUrl}client/${client.id}`, client);
  }
}
