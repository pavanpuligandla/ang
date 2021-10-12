import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient) { }

  authSubject = new BehaviorSubject(false);

  public login(email: string, password: string, rememberMe: boolean) {
    let url = `${environment.apiUrl}/Users/Login?email=${email}&password=${password}&rememberMe=${rememberMe}`;
    return this.http.get(url);
  }

  public logout(): void {
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("FirstName");
    localStorage.removeItem("LastName");
    localStorage.removeItem("LastLogin");
    localStorage.removeItem('Role');
  }

  public isLoggedIn() {
    return localStorage.getItem('bearerToken') !== null;
  }
}
