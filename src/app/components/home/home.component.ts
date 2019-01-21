import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  outings: Object;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getOutingsByInterestsMatch().subscribe(i => this.outings = i)
  }

}
