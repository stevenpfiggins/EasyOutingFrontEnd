import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../../services/interests.service';
import { Interests } from '../../../Models/Interests';
import { MatTableDataSource } from '@angular/material';

const ApiUrl = 'http.//locahost44311'

@Component({
  selector: 'app-interests-index',
  templateUrl: './interests-index.component.html',
  styleUrls: ['./interests-index.component.css']
})
export class InterestsIndexComponent implements OnInit {

  columnNames = ['UserName', 'UserLocation'//, 'Canoeing', 'Kayaking', 'Hiking', 'RockClimbing', 'Camping',
  //'Fishing', 'SightSeeing', 'FootBall', 'Basketball', 'Soccer', 'Baseball', 'Hockey', 'Tennis', 'Golf',
  //'Running', 'WeightLifting', 'Yoga', 'Gymnastics', 'Restaurants', 'Bars', 'Wineries', 'Consoles', 'BoardGames',
  //'CardGames', 'Arcades', 'Movies', 'Theatre', 'Concerts', 'Festivals', 'Clubs', 'Bowling', 'Zoo', 'Painting',
  //'Knitting', 'Pottery', 'Museums', 'Aquariums', 'Galleries'
  ];

  dataSource: MatTableDataSource<Interests>

  constructor(private _interestService: InterestsService) { }

  ngOnInit() {
    this._interestService.getInterests().subscribe((interests: Interests[]) => {
      this.dataSource = new MatTableDataSource<Interests>(interests);
    });
  }

}
