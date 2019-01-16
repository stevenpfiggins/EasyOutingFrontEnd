import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  isLoggedIn: boolean

  constructor(public authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.authService.userInfo.subscribe((d: UserData) => {
      console.log('the value of data', d);
      this.username = d.user;
      this.isLoggedIn = d.isloggedin;
    });
  }

  onLogout() {
    this.authService.logout();
  }

}
export interface UserData {
  user: string;
  isloggedin: boolean;
}
