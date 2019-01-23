import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Interests } from 'src/app/Models/Interests';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-interests',
  templateUrl: './admin-interests.component.html',
  styleUrls: ['./admin-interests.component.css']
})
export class AdminInterestsComponent implements OnInit {

  columnNames = ['interestsEntityId', 'userName', 'userLocation', 'delete'];
  dataSource: MatTableDataSource<Interests>;

  constructor(private _adminService: AdminService) { }

  ngOnInit() {
    this._adminService.getInterests().subscribe((interests: Interests[]) => {
      this.dataSource = new MatTableDataSource<Interests>(interests);
    });
  }

}
