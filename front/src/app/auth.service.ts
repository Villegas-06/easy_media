import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Reemplaza con la URL de tu servidor Node.js

  constructor(private http: HttpClient) {}

  register(userData: []) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    console.log(headers);

    return this.http.post(`${this.apiUrl}/register`, userData, { headers });
  }
}
