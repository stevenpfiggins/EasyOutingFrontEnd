import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { AuthService } from 'src/app/services/auth.service';
import { OutingsService } from 'src/app/services/outings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  outings: Object;
  isLoggedIn: boolean;

  constructor(private _homeService: HomeService, private _authService: AuthService, private _outingsService: OutingsService) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.currentUser();
    if (this.isLoggedIn) {
      this._homeService.getOutingsByInterestsMatch().subscribe(i => this.outings = i)
    }
    else {
      this._outingsService.getOutings().subscribe(o => this.outings = o)
    }
  }

}
