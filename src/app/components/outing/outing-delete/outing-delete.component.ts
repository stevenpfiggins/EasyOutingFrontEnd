import { Component, OnInit } from '@angular/core';
import { OutingsService } from 'src/app/services/outings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Outing } from 'src/app/Models/Outing';

@Component({
  selector: 'app-outing-delete',
  templateUrl: './outing-delete.component.html',
  styleUrls: ['./outing-delete.component.css']
})
export class OutingDeleteComponent implements OnInit {

  outing: Outing;

  constructor(private _outingService: OutingsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._outingService.getOuting(p.get('id')).subscribe((singleOuting: Outing) => {
        this.outing = singleOuting;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._outingService.deleteOuting(this.outing.OutingEntityId).subscribe(() => {
      this._router.navigate(['/outing']);
    });  
  }
}
