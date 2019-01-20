import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OutingsService } from 'src/app/services/outings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Outing } from 'src/app/Models/Outing';
import { InterestsSelect } from 'src/app/Models/InterestsSelect';
import { LocationSelect } from 'src/app/Models/LocationSelect';

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

  locationSelect: LocationSelect[] = [
    {value: 'Alabama', viewValue: 'Alabama'},
    {value: 'Alaska', viewValue: 'Alaska'},
    {value: 'Arizona', viewValue: 'Arizona'},
    {value: 'Arkansas', viewValue: 'Arkansas'},
    {value: 'California', viewValue: 'California'},
    {value: 'Colorado', viewValue: 'Colorado'},
    {value: 'Connecticut', viewValue: 'Connecticut'},
    {value: 'Delaware', viewValue: 'Delaware'},
    {value: 'District of Columbia', viewValue: 'District of Columbia'},
    {value: 'Florida', viewValue: 'Florida'},
    {value: 'Georgia', viewValue: 'Georgia'},
    {value: 'Hawaii', viewValue: 'Hawaii'},
    {value: 'Idaho', viewValue: 'Idaho'},
    {value: 'Illinois', viewValue: 'Illinois'},
    {value: 'Indiana', viewValue: 'Indiana'},
    {value: 'Iowa', viewValue: 'Iowa'},
    {value: 'Kansas', viewValue: 'Kansas'},
    {value: 'Kentucky', viewValue: 'Kentucky'},
    {value: 'Louisiana', viewValue: 'Louisiana'},
    {value: 'Maine', viewValue: 'Maine'},
    {value: 'Maryland', viewValue: 'Maryland'},
    {value: 'Massachusetts', viewValue: 'Massachusetts'},
    {value: 'Michigan', viewValue: 'Michigan'},
    {value: 'Minnesota', viewValue: 'Minnesota'},
    {value: 'Mississippi', viewValue: 'Mississippi'},
    {value: 'Missouri', viewValue: 'Missouri'},
    {value: 'Montana', viewValue: 'Montana'},
    {value: 'Nebraska', viewValue: 'Nebraska'},
    {value: 'Nevada', viewValue: 'Nevada'},
    {value: 'New Hampshire', viewValue: 'New Hampshire'},
    {value: 'New Jersey', viewValue: 'New Jersey'},
    {value: 'New Mexico', viewValue: 'New Mexico'},
    {value: 'New York', viewValue: 'New York'},
    {value: 'North Carolina', viewValue: 'North Carolina'},
    {value: 'North Dakota', viewValue: 'North Dakota'},
    {value: 'Ohio', viewValue: 'Ohio'},
    {value: 'Oklahoma', viewValue: 'Oklahoma'},
    {value: 'Oregon', viewValue: 'Oregon'},
    {value: 'Pennsylvania', viewValue: 'Pennsylvania'},
    {value: 'Rhode Island', viewValue: 'Rhode Island'},
    {value: 'South Carolina', viewValue: 'South Carolina'},
    {value: 'South Dakota', viewValue: 'South Dakota'},
    {value: 'Tennessee', viewValue: 'Tennessee'},
    {value: 'Texas', viewValue: 'Texas'},
    {value: 'Utah', viewValue: 'Utah'},
    {value: 'Vermont', viewValue: 'Vermont'},
    {value: 'Virginia', viewValue: 'Virginia'},
    {value: 'Washington', viewValue: 'Washington'},
    {value: 'West Virginia', viewValue: 'West Virginia'},
    {value: 'Wisconsin', viewValue: 'Wisconsin'},
    {value: 'Wyoming', viewValue: 'Wyoming'},
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
