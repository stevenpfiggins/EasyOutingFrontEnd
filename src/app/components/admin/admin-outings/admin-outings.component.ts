import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Outing } from 'src/app/Models/Outing';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-outings',
  templateUrl: './admin-outings.component.html',
  styleUrls: ['./admin-outings.component.css']
})
export class AdminOutingsComponent implements OnInit {

  columnNames = ['outingEntityId', 'outingName', 'outingDate', 'outingLocation', 'outingType', 'dateCreated', 'delete']
  dataSource: MatTableDataSource<Outing>;

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getOutings().subscribe((outings: Outing[]) => {
      this.dataSource = new MatTableDataSource<Outing>(outings);
    })
  }

}
