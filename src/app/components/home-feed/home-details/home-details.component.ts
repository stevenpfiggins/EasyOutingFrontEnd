import { Component, OnInit } from '@angular/core';
import { Outing } from 'src/app/Models/Outing';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  outing: Outing;

  constructor(private _activatedRoute: ActivatedRoute, private _homeService: HomeService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._homeService.getOuting(routeData.get('id')).subscribe((singleOuting: Outing) => {
        this.outing = singleOuting;
      });
    });
  }

}
