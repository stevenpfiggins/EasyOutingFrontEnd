import { Component, OnInit } from '@angular/core';
import { InterestsService } from 'src/app/services/interests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Interests } from 'src/app/Models/Interests';

@Component({
  selector: 'app-interests-delete',
  templateUrl: './interests-delete.component.html',
  styleUrls: ['./interests-delete.component.css']
})
export class InterestsDeleteComponent implements OnInit {

  interests: any;

  constructor(private _interestsService: InterestsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._interestsService.getSingleInterests(p.get('id')).subscribe((singleInterest: Interests) => {
        this.interests = singleInterest;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._interestsService.deleteInterests(this.interests.interestId).subscribe(() => {
      this._router.navigate(['/interests']);
    });
  }

}
