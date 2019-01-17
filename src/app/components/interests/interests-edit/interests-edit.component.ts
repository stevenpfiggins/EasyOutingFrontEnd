import { Component, OnInit } from '@angular/core';
import { Interests } from 'src/app/Models/Interests';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InterestsService } from 'src/app/services/interests.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interests-edit',
  templateUrl: './interests-edit.component.html',
  styleUrls: ['./interests-edit.component.css']
})
export class InterestsEditComponent implements OnInit {

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
    UserName: new FormControl(this.interests.UserName),
    UserLocation: new FormControl(this.interests.UserLocation)

  });
    }

    onSubmit(form) {
      const updateInterests: Interests = {
        InterestsEntityId: form.value.InterestsEntityId,
        UserName: form.value.UserName,
        UserLocation: form.value.UserLocation,
      
      };

      this._interestsService.updateInterests(updateInterests).subscribe(d => {
        this._router.navigate(['/interests']);
      });
    }

}
