import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutingsService } from 'src/app/services/outings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Outing } from 'src/app/Models/Outing';
import { InterestsSelect } from 'src/app/Models/InterestsSelect';

@Component({
  selector: 'app-outing-edit',
  templateUrl: './outing-edit.component.html',
  styleUrls: ['./outing-edit.component.css']
})
export class OutingEditComponent implements OnInit {

  outing: Outing;

  interestsSelect: InterestsSelect[] = [
    {value: 1, viewValue: 'Canoeing'},
    {value: 2, viewValue: 'Kayaking'},
    {value: 3, viewValue: 'Hiking'},
    {value: 4, viewValue: 'Rock Climbing'},
    {value: 5, viewValue: 'Camping'},
    {value: 6, viewValue: 'Fishing'},
    {value: 7, viewValue: 'Sight Seeing'},
    {value: 8, viewValue: 'Football'},
    {value: 9, viewValue: 'Basketball'},
    {value: 10, viewValue: 'Soccer'},
    {value: 11, viewValue: 'Baseball'},
    {value: 12, viewValue: 'Hockey'},
    {value: 13, viewValue: 'Tennis'},
    {value: 14, viewValue: 'Golf'},
    {value: 15, viewValue: 'Running'},
    {value: 16, viewValue: 'Weight Lifting'},
    {value: 17, viewValue: 'Yoga'},
    {value: 18, viewValue: 'Gymnastics'},
    {value: 19, viewValue: 'Restaurants'},
    {value: 20, viewValue: 'Bars'},
    {value: 21, viewValue: 'Wineries'},
    {value: 22, viewValue: 'Consoles'},
    {value: 23, viewValue: 'Board Games'},
    {value: 24, viewValue: 'Card Games'},
    {value: 25, viewValue: 'Arcades'},
    {value: 26, viewValue: 'Movies'},
    {value: 27, viewValue: 'Theatre'},
    {value: 28, viewValue: 'Concerts'},
    {value: 29, viewValue: 'Festivals'},
    {value: 30, viewValue: 'Clubs'},
    {value: 31, viewValue: 'Bowling'},
    {value: 32, viewValue: 'Zoo'},
    {value: 33, viewValue: 'Painting'},
    {value: 34, viewValue: 'Knitting'},
    {value: 35, viewValue: 'Pottery'},
    {value: 36, viewValue: 'Museums'},
    {value: 37, viewValue: 'Aquariums'},
    {value: 38, viewValue: 'Galleries'},
  ]

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
    };
    this._outingService.updateOuting(updateOuting).subscribe(d => {
      this._router.navigate(['/outings']);
    });
  }


}
