import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OutingsService } from 'src/app/services/outings.service';
import { Outing } from 'src/app/Models/Outing';

@Component({
  selector: 'app-outing-detail',
  templateUrl: './outing-detail.component.html',
  styleUrls: ['./outing-detail.component.css']
})
export class OutingDetailComponent implements OnInit {

  outing: Outing;

  constructor(private _activatedRoute: ActivatedRoute, private _outingService: OutingsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._outingService.getOuting(routeData.get('id')).subscribe((singleOuting: Outing) => {
        this.outing = singleOuting;
      });
    });
  }

}
