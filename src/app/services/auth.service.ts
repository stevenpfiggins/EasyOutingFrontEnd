import { Injectable } from '@angular/core';
import { Token } from '../Models/Token';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from '../Models/UserInfo';
import { Observable, Subject } from 'rxjs';
import { RegisterUser } from '../Models/RegisterUser';
import { Router } from "@angular/router";

const Api_Url = "https://easyoutings.azurewebsites.net"

@Injectable()
export class AuthService {
  userInfo: Token;
  isLoggedIn = new Subject<boolean>();
  loginInfo: UserInfo;

  constructor(private _http: HttpClient, private _router: Router) { }

    register(regUserData: RegisterUser) {
      return this._http.post(`${Api_Url}/api/Auth/Register`, regUserData)
    }

    login(loginInfo) {

      return this._http.post(`${Api_Url}/api/Auth/Login`, loginInfo).subscribe( (token: any) => {
        localStorage.setItem('token', token.token);
        this.isLoggedIn.next(true);
        this._router.navigate(['/home'])
      });
    }

    currentUser(): boolean {
      if(!localStorage.getItem('token')) {return false;}
      return true;
    }

    logout() {
      localStorage.clear();
      this.isLoggedIn.next(false);

      const authHeader = new HttpHeaders().set('Authorization', `Bearer${localStorage.getItem('token')}`);

      this._http.post(`${Api_Url}/api/Account/Logout`, {header: authHeader});
      this._router.navigate(['/login'])
    }
  }

