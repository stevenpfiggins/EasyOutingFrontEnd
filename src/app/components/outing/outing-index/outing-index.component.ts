import { Component, OnInit } from '@angular/core';
import { OutingsService } from 'src/app/services/outings.service';
import { Outing } from 'src/app/Models/Outing';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-outing-index',
  templateUrl: './outing-index.component.html',
  styleUrls: ['./outing-index.component.css']
})
export class OutingIndexComponent implements OnInit {

  columnNames = ['outingName', 'outingDate', 'outingLocation', 'outingType', 'createdOn', 'details', 'buttons'];
  dataSource: MatTableDataSource<Outing>

  constructor(private _outingService: OutingsService) { }

  ngOnInit() {
    this._outingService.getOutingsByUser().subscribe((outings: Outing[]) => {
      this.dataSource = new MatTableDataSource<Outing>(outings);
    })
  }

}
