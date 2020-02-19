import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginDTO } from './login/loginDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<LoginDTO> {
    return this.http.post<LoginDTO>('http://localhost:3000/users/login', {userName, password});
  }
}
