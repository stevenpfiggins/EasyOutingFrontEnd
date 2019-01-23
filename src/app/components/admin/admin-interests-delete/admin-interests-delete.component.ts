import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InterestsService } from 'src/app/services/interests.service';
import { Interests } from 'src/app/Models/Interests';

@Component({
  selector: 'app-admin-interests-delete',
  templateUrl: './admin-interests-delete.component.html',
  styleUrls: ['./admin-interests-delete.component.css']
})
export class AdminInterestsDeleteComponent implements OnInit {

  interests: any;

  constructor(private _adminService: AdminService, private _interestsService: InterestsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._interestsService.getSingleInterestsByEntity(p.get('id')).subscribe((singleInterest: Interests) => {
        this.interests = singleInterest;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._adminService.deleteInterests(this.interests.interestsEntityId).subscribe(() => {
      this._router.navigate(['/admin/interests'])
    })
  }

}
