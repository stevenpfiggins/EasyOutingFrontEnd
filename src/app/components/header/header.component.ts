import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  token: any;
  decodedToken: any;
  userId: any;

  constructor(public _authService: AuthService, private _router: Router, private _jwtHelper: JwtHelperService) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.loggedIn();
    this.token = localStorage.getItem('token');
    this.decodedToken = this._jwtHelper.decodeToken(this.token);
    this.userId = this.decodedToken.nameid;
  }

  onLogout() {
    this._authService.logout();
    this.isLoggedIn = false;
    this._router.navigate(['/login'])
  }

}

