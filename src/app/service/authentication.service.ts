import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class AuthenticationUser{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

 public loggedInUserRole:string;
 public loggedInUser:string;
  constructor(private httpClient:HttpClient) { }


  authenticate(username, password , role) {
    this.loggedInUserRole=role;
    this.loggedInUser=username;
    console.log(username);
    console.log(password);
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<AuthenticationUser>('http://localhost:8080/security/validatelogin', { headers }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          console.log(userData);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
