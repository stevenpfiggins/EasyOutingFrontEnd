import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../../../services/interests.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests-create',
  templateUrl: './interests-create.component.html',
  styleUrls: ['./interests-create.component.css']
})
export class InterestsCreateComponent implements OnInit {

  interestForm: FormGroup;

  constructor(private _interestService: InterestsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.interestForm = this._form.group({
    UserName: new FormControl,
    UserLocation: new FormControl
    });
  }

  onSubmit(){
    this._interestService.createInterests(this.interestForm.value).subscribe(data => {
      this._router.navigate(['/interests']);
    });
  }
}
