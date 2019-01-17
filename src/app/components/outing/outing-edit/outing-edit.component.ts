import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutingsService } from 'src/app/services/outings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Outing } from 'src/app/Models/Outing';

@Component({
  selector: 'app-outing-edit',
  templateUrl: './outing-edit.component.html',
  styleUrls: ['./outing-edit.component.css']
})
export class OutingEditComponent implements OnInit {

  outing: Outing;

  editOutingForm: FormGroup;

  constructor(private _form:FormBuilder,
              private _outingService: OutingsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

                this._ar.paramMap.subscribe(p => {
                  this._outingService.getOuting(p.get('id')).subscribe((singleOuting: Outing) => {
                    this.outing = singleOuting;
                    this.createForm(this.outing);
                  });
                });
              }

  ngOnInit() {
  }

  createForm(outing: any) {
    this.editOutingForm = this._form.group({
      OutingEntityId: new FormControl(outing.outingEntityId),
      OutingName: new FormControl(outing.outingName),
      OutingDescription: new FormControl(outing.outingDescription),
      OutingLocation: new FormControl(outing.outingLocation),
      OutingDate: new FormControl(outing.outingDate),
      OutingType: new FormControl(outing.outingType),
      CreatedBy: new FormControl(outing.createdBy)
    });
  }

  onSubmit(form) {
    const updateOuting: Outing ={
      OutingEntityId: form.value.OutingEntityId,
      OutingName: form.value.OutingName,
      OutingDescription: form.value.OutingDescription,
      OutingLocation: form.value.OutingLocation,
      OutingDate: form.value.OutingDate,
      OutingType: form.value.OutingType,
      CreatedBy: form.value.CreatedBy
    };
    this._outingService.updateOuting(updateOuting).subscribe(d => {
      this._router.navigate(['/outings']);
    });
  }


}
