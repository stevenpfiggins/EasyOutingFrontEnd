import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../../services/interests.service';
import { Interests } from '../../../Models/Interests';
import { MatTableDataSource } from '@angular/material';

const ApiUrl = 'http.//locahost:44311'

@Component({
  selector: 'app-interests-index',
  templateUrl: './interests-index.component.html',
  styleUrls: ['./interests-index.component.css']
})
export class InterestsIndexComponent implements OnInit {

  columnNames = ['OwnerId', 'UserName', 'UserLocation', 'buttons', 'details'];

  dataSource: MatTableDataSource<Interests>

  constructor(private _interestService: InterestsService) { }

  ngOnInit() {
    this._interestService.getInterests().subscribe((interests: Interests[]) => {
      this.dataSource = new MatTableDataSource<Interests>(interests);
    });
  }

}
