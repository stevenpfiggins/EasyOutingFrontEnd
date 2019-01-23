import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { OutingsService } from 'src/app/services/outings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Outing } from 'src/app/Models/Outing';

@Component({
  selector: 'app-admin-outings-delete',
  templateUrl: './admin-outings-delete.component.html',
  styleUrls: ['./admin-outings-delete.component.css']
})
export class AdminOutingsDeleteComponent implements OnInit {

  outing: any;

  constructor(private _adminService: AdminService, private _outingService: OutingsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._outingService.getOuting(p.get('id')).subscribe((singleOuting: Outing) => {
        this.outing = singleOuting;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._adminService.deleteOuting(this.outing.outingEntityId).subscribe(() => {
      this._router.navigate(['/admin/outings']);
    });  
  }
}
