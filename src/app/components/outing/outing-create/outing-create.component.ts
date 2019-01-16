import { Component, OnInit } from '@angular/core';
import { OutingsService } from '../../../services/outings.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outing-create',
  templateUrl: './outing-create.component.html',
  styleUrls: ['./outing-create.component.css']
})
export class OutingCreateComponent implements OnInit {

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
