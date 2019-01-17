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
