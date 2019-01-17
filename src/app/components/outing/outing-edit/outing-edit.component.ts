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
    {value: 'Canoeing', viewValue: 'Canoeing'},
    {value: 'Kayaking', viewValue: 'Kayaking'},
    {value: 'Hiking', viewValue: 'Hiking'},
    {value: 'RockClimbing', viewValue: 'Rock Climbing'},
    {value: 'Camping', viewValue: 'Camping'},
    {value: 'Fishing', viewValue: 'Fishing'},
    {value: 'SightSeeing', viewValue: 'Sight Seeing'},
    {value: 'Football', viewValue: 'Football'},
    {value: 'Basketball', viewValue: 'Basketball'},
    {value: 'Soccer', viewValue: 'Soccer'},
    {value: 'Baseball', viewValue: 'Baseball'},
    {value: 'Hockey', viewValue: 'Hockey'},
    {value: 'Tennis', viewValue: 'Tennis'},
    {value: 'Golf', viewValue: 'Golf'},
    {value: 'Running', viewValue: 'Running'},
    {value: 'WeightLifting', viewValue: 'Weight Lifting'},
    {value: 'Yoga', viewValue: 'Yoga'},
    {value: 'Gymnastics', viewValue: 'Gymnastics'},
    {value: 'Restaurants', viewValue: 'Restaurants'},
    {value: 'Bars', viewValue: 'Bars'},
    {value: 'Wineries', viewValue: 'Wineries'},
    {value: 'Consoles', viewValue: 'Consoles'},
    {value: 'BoardGames', viewValue: 'Board Games'},
    {value: 'CardGames', viewValue: 'Card Games'},
    {value: 'Arcades', viewValue: 'Arcades'},
    {value: 'Movies', viewValue: 'Movies'},
    {value: 'Theatre', viewValue: 'Theatre'},
    {value: 'Concerts', viewValue: 'Concerts'},
    {value: 'Festivals', viewValue: 'Festivals'},
    {value: 'Clubs', viewValue: 'Clubs'},
    {value: 'Bowling', viewValue: 'Bowling'},
    {value: 'Zoo', viewValue: 'Zoo'},
    {value: 'Painting', viewValue: 'Painting'},
    {value: 'Knitting', viewValue: 'Knitting'},
    {value: 'Pottery', viewValue: 'Pottery'},
    {value: 'Museums', viewValue: 'Museums'},
    {value: 'Aquariums', viewValue: 'Aquariums'},
    {value: 'Galleries', viewValue: 'Galleries'},
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
