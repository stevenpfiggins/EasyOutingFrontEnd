import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { AuthService } from 'src/app/services/auth.service';
import { OutingsService } from 'src/app/services/outings.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  outings: Object;
  isLoggedIn: boolean;

  constructor(private _homeService: HomeService, private _authService: AuthService, private _outingsService: OutingsService) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.loggedIn();
    if (this.isLoggedIn) {
      this._homeService.getOutingsByInterestsMatch().subscribe(i => this.outings = i)
    }
    else {
      this._outingsService.getOutings().subscribe(o => this.outings = o)
    }
  }

}
