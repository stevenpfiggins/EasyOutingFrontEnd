import { Component, OnInit } from '@angular/core';
import { Interests } from 'src/app/Models/Interests';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InterestsService } from 'src/app/services/interests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationSelect } from 'src/app/Models/LocationSelect';

@Component({
  selector: 'app-interests-edit',
  templateUrl: './interests-edit.component.html',
  styleUrls: ['./interests-edit.component.css']
})
export class InterestsEditComponent implements OnInit {

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

  interests: Interests;
  editInterestsForm: FormGroup;

  constructor(private _form: FormBuilder,
    private _interestsService: InterestsService,
    private _ar: ActivatedRoute,
    private _router: Router) {

    this._ar.paramMap.subscribe(p => {
      this._interestsService.getSingleInterests(p.get('id')).subscribe((singleInterests: Interests) => {
        this.interests = singleInterests;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm() {
    this.editInterestsForm = this._form.group({
      interestsEntityId: new FormControl(this.interests.interestsEntityId),
      ownerId: new FormControl(this.interests.ownerId),
      userLocation: new FormControl(this.interests.userLocation),
      canoeing: new FormControl(this.interests.canoeing),
      kayaking: new FormControl(this.interests.kayaking),
      hiking: new FormControl(this.interests.hiking),
      rockClimbing: new FormControl(this.interests.rockClimbing),
      camping: new FormControl(this.interests.camping),
      fishing: new FormControl(this.interests.fishing),
      sightSeeing: new FormControl(this.interests.sightSeeing),
      football: new FormControl(this.interests.football),
      basketball: new FormControl(this.interests.basketball),
      soccer: new FormControl(this.interests.soccer),
      baseball: new FormControl(this.interests.baseball),
      hockey: new FormControl(this.interests.hockey),
      tennis: new FormControl(this.interests.tennis),
      golf: new FormControl(this.interests.golf),
      running: new FormControl(this.interests.running),
      weightLifting: new FormControl(this.interests.weightLifting),
      yoga: new FormControl(this.interests.yoga),
      gymnastics: new FormControl(this.interests.gymnastics),
      restaurants: new FormControl(this.interests.restaurants),
      bars: new FormControl(this.interests.bars),
      wineries: new FormControl(this.interests.wineries),
      consoles: new FormControl(this.interests.consoles),
      boardGames: new FormControl(this.interests.boardGames),
      cardGames: new FormControl(this.interests.cardGames),
      arcades: new FormControl(this.interests.arcades),
      movies: new FormControl(this.interests.movies),
      theatre: new FormControl(this.interests.theatre),
      concerts: new FormControl(this.interests.concerts),
      festivals: new FormControl(this.interests.festivals),
      clubs: new FormControl(this.interests.clubs),
      bowling: new FormControl(this.interests.bowling),
      zoo: new FormControl(this.interests.zoo),
      painting: new FormControl(this.interests.painting),
      knitting: new FormControl(this.interests.knitting),
      pottery: new FormControl(this.interests.pottery),
      museums: new FormControl(this.interests.museums),
      aquariums: new FormControl(this.interests.aquariums),
      galleries: new FormControl(this.interests.galleries),
    });
  }

  onSubmit(form) {
    const updateInterests: Interests = {
      interestsEntityId: form.value.interestsEntityId,
      ownerId: form.value.ownerId,
      userLocation: form.value.userLocation,
      canoeing: form.value.canoeing,
      kayaking: form.value.kayaking,
      hiking: form.value.hiking,
      rockClimbing: form.value.rockClimbing,
      camping: form.value.camping,
      fishing: form.value.fishing,
      sightSeeing: form.value.sightSeeing,
      football: form.value.football,
      basketball: form.value.basketball,
      soccer: form.value.soccer,
      baseball: form.value.baseball,
      hockey: form.value.hockey,
      tennis: form.value.tennis,
      golf: form.value.golf,
      running: form.value.running,
      weightLifting: form.value.weightLifting,
      yoga: form.value.yoga,
      gymnastics: form.value.gymnastics,
      restaurants: form.value.restaurants,
      bars: form.value.bars,
      wineries: form.value.wineries,
      consoles: form.value.consoles,
      boardGames: form.value.boardGames,
      cardGames: form.value.cardGames,
      arcades: form.value.arcades,
      movies: form.value.movies,
      theatre: form.value.theatre,
      concerts: form.value.concerts,
      festivals: form.value.festivals,
      clubs: form.value.clubs,
      bowling: form.value.bowling,
      zoo: form.value.zoo,
      painting: form.value.painting,
      knitting: form.value.knitting,
      pottery: form.value.pottery,
      museums: form.value.museums,
      aquariums: form.value.aquariums,
      galleries: form.value.galleries
    };

    this._interestsService.updateInterests(updateInterests).subscribe(d => {
      this._router.navigate(['/interests']);
    });
  }

}
