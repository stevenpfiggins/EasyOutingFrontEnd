import { Component, OnInit, Input } from '@angular/core';
import { OutingsService } from 'src/app/services/outings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  outings: Object;

  constructor(private _outingService: OutingsService) { }

  ngOnInit() {
    this._outingService.getOutings().subscribe(o => this.outings = o)
  }

}
