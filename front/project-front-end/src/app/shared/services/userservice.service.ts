import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL='http://localhost:8080/auth';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
    http: HttpClient = inject(HttpClient)

    registerUser(user: any) {
        return this.http.post(`${API_URL}/signup`, user)
    }
}
