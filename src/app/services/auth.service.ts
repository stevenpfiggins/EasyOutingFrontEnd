import { Injectable } from '@angular/core';
import { Token } from '../Models/Token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../Models/UserInfo';
import { Observable, Subject } from 'rxjs';
import { RegisterUser } from '../Models/RegisterUser';
import { Router } from "@angular/router";

const Api_Url = "https://localhost:44311"

@Injectable()
export class AuthService {
  userInfo = new Subject<{}>();

  constructor(private _http: HttpClient, private _router: Router) { }

    register(regUserData: RegisterUser) {
      return this._http.post(`${Api_Url}/api/Auth/Register`, regUserData)
    }

    login(loginInfo) {

      return this._http.post(`${Api_Url}/api/Auth/Login`, loginInfo).subscribe( (token: Token) => {
        localStorage.setItem('id_token', token.access_token);
        this.userInfo.next({
          isloggedin: true,
          user: token.userName
        });
        this._router.navigate(['/home'])
      });
    }

    currentUser(): Observable<Object> {
      if (!localStorage.getItem('id_token')) {return new Observable(observer => observer.next(false));}
      return this._http.get(`${Api_Url}/api/Account/UserInfo`, {headers: this.setHeader() })
    }

    logout() {
      localStorage.clear();
      this.userInfo.next(false);
      console.log('here');
      this._router.navigate(['/login']);

      return this._http.post(`${Api_Url}/api/Auth/Logout`, {headers: this.setHeader()});
    }

    private setHeader(): HttpHeaders {
      return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    }
}
