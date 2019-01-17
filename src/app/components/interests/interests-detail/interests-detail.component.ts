import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestsService } from 'src/app/services/interests.service';
import { Interests } from 'src/app/Models/Interests';

@Component({
  selector: 'app-interests-detail',
  templateUrl: './interests-detail.component.html',
  styleUrls: ['./interests-detail.component.css']
})
export class InterestsDetailComponent implements OnInit {

  interests: Interests;

  constructor(private _activatedRoute: ActivatedRoute, private _interestsService: InterestsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._interestsService.getSingleInterests(routeData.get('id')).subscribe((singleInterests: Interests) => {
        this.interests = singleInterests;
      });
    });
  }

}
