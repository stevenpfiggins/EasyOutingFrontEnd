import { Component, OnInit } from '@angular/core';
import { OutingsService } from 'src/app/services/outings.service';
import { Outing } from 'src/app/Models/Outing';
import { MatTableDataSource } from '@angular/material';

const Api_Url = 'http.//locahost44311'

@Component({
  selector: 'app-outing-index',
  templateUrl: './outing-index.component.html',
  styleUrls: ['./outing-index.component.css']
})
export class OutingIndexComponent implements OnInit {

  columnNames = ['OutingName', 'OutingDate', 'OutingLocation', 'OutingType', 'CreatedOn', 'details', 'buttons'];
  dataSource: MatTableDataSource<Outing>

  constructor(private _outingService: OutingsService) { }

  ngOnInit() {
    this._outingService.getOutings().subscribe((outings: Outing[]) => {
      this.dataSource = new MatTableDataSource<Outing>(outings);
    })
  }

}
