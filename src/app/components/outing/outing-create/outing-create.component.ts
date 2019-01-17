import { Component, OnInit } from '@angular/core';
import { OutingsService } from '../../../services/outings.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { InterestsSelect } from 'src/app/Models/InterestsSelect';

@Component({
  selector: 'app-outing-create',
  templateUrl: './outing-create.component.html',
  styleUrls: ['./outing-create.component.css']
})
export class OutingCreateComponent implements OnInit {

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

  outingForm: FormGroup;

  constructor(private _outingService: OutingsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.outingForm = this._form.group({
      OutingName: new FormControl,
      OutingDescription: new FormControl,
      OutingLocation: new FormControl,
      OutingDate: new FormControl,
      OutingType: new FormControl,
      CreatedBy: new FormControl
    });
  }

  onSubmit(){
    this._outingService.createOuting(this.outingForm.value).subscribe(data => {
      this._router.navigate(['/outings']);
    })
  }
}
