import { Component, OnInit, Input } from '@angular/core';
import { InterestsService } from '../../../services/interests.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationSelect } from 'src/app/Models/LocationSelect';

@Component({
  selector: 'app-interests-create',
  templateUrl: './interests-create.component.html',
  styleUrls: ['./interests-create.component.css']
})
export class InterestsCreateComponent implements OnInit {

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

  interestForm: FormGroup;

  constructor(private _interestService: InterestsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.interestForm = this._form.group({
    userLocation: new FormControl,
    canoeing: new FormControl,
    kayaking: new FormControl,
    hiking: new FormControl,
    rockClimbing: new FormControl,
    camping: new FormControl,
    fishing: new FormControl,
    sightSeeing: new FormControl,
    football: new FormControl,
    basketball: new FormControl,
    soccer: new FormControl,
    baseball: new FormControl,
    hockey: new FormControl,
    tennis: new FormControl,
    golf: new FormControl,
    running: new FormControl,
    weightLifting: new FormControl,
    yoga: new FormControl,
    gymnastics: new FormControl,
    restaurants: new FormControl,
    bars: new FormControl,
    wineries: new FormControl,
    consoles: new FormControl,
    boardGames: new FormControl,
    cardGames: new FormControl,
    arcades: new FormControl,
    movies: new FormControl,
    theatre: new FormControl,
    concerts: new FormControl,
    festivals: new FormControl,
    clubs: new FormControl,
    bowling: new FormControl,
    zoo: new FormControl,
    painting: new FormControl,
    knitting: new FormControl,
    pottery: new FormControl,
    museums: new FormControl,
    aquariums: new FormControl,
    galleries: new FormControl
    });
  }

  onSubmit(){
    console.log(this.interestForm.value)
    if (this.interestForm.value.canoeing == null){this.interestForm.value.canoeing = false}
    if (this.interestForm.value.kayaking == null){this.interestForm.value.kayaking = false}
    if (this.interestForm.value.hiking == null){this.interestForm.value.hiking = false}
    if (this.interestForm.value.rockClimbing == null){this.interestForm.value.rockClimbing = false}
    if (this.interestForm.value.camping == null){this.interestForm.value.camping = false}
    if (this.interestForm.value.fishing == null){this.interestForm.value.fishing = false}
    if (this.interestForm.value.sightSeeing == null){this.interestForm.value.sightSeeing = false}
    if (this.interestForm.value.football == null){this.interestForm.value.football = false}
    if (this.interestForm.value.basketball == null){this.interestForm.value.basketball = false}
    if (this.interestForm.value.soccer == null){this.interestForm.value.soccer = false}
    if (this.interestForm.value.baseball == null){this.interestForm.value.baseball = false}
    if (this.interestForm.value.hockey == null){this.interestForm.value.hockey = false}
    if (this.interestForm.value.tennis == null){this.interestForm.value.tennis = false}
    if (this.interestForm.value.golf == null){this.interestForm.value.golf = false}
    if (this.interestForm.value.running == null){this.interestForm.value.running = false}
    if (this.interestForm.value.weightLifting == null){this.interestForm.value.weightLifting = false}
    if (this.interestForm.value.yoga == null){this.interestForm.value.yoga = false}
    if (this.interestForm.value.gymnastics == null){this.interestForm.value.gymnastics = false}
    if (this.interestForm.value.restaurants == null){this.interestForm.value.restaurants = false}
    if (this.interestForm.value.bars == null){this.interestForm.value.bars = false}
    if (this.interestForm.value.wineries == null){this.interestForm.value.wineries = false}
    if (this.interestForm.value.consoles == null){this.interestForm.value.consoles = false}
    if (this.interestForm.value.boardGames == null){this.interestForm.value.boardGames = false}
    if (this.interestForm.value.cardGames == null){this.interestForm.value.cardGames = false}
    if (this.interestForm.value.arcades == null){this.interestForm.value.arcades = false}
    if (this.interestForm.value.movies == null){this.interestForm.value.movies = false}
    if (this.interestForm.value.theatre == null){this.interestForm.value.theatre = false}
    if (this.interestForm.value.concerts == null){this.interestForm.value.concerts = false}
    if (this.interestForm.value.festivals == null){this.interestForm.value.festivals = false}
    if (this.interestForm.value.clubs == null){this.interestForm.value.clubs = false}
    if (this.interestForm.value.bowling == null){this.interestForm.value.bowling = false}
    if (this.interestForm.value.zoo == null){this.interestForm.value.zoo = false}
    if (this.interestForm.value.painting == null){this.interestForm.value.painting = false}
    if (this.interestForm.value.knitting == null){this.interestForm.value.knitting = false}
    if (this.interestForm.value.pottery == null){this.interestForm.value.pottery = false}
    if (this.interestForm.value.museums == null){this.interestForm.value.museums = false}
    if (this.interestForm.value.aquariums == null){this.interestForm.value.aquariums = false}
    if (this.interestForm.value.galleries == null){this.interestForm.value.galleries = false}

    this._interestService.createInterests(this.interestForm.value).subscribe(data => {
      this._router.navigate(['/interests']);
    });
  }
}
