import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,  
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { OutingsService } from './services/outings.service';
import { OutingIndexComponent } from './components/outing/outing-index/outing-index.component';
import { OutingCreateComponent } from './components/outing/outing-create/outing-create.component';
import { InterestsCreateComponent } from './components/interests/interests-create/interests-create.component';
import { InterestsService } from './services/interests.service';
import { InterestsIndexComponent } from './components/interests/interests-index/interests-index.component';
import { OutingDetailComponent } from './components/outing/outing-detail/outing-detail.component';
import { OutingEditComponent } from './components/outing/outing-edit/outing-edit.component';
import { OutingDeleteComponent } from './components/outing/outing-delete/outing-delete.component';
import { InterestsDetailComponent } from './components/interests/interests-detail/interests-detail.component';
import { InterestsEditComponent } from './components/interests/interests-edit/interests-edit.component';
import { InterestsDeleteComponent } from './components/interests/interests-delete/interests-delete.component';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},

  {
  path: 'outings', children: [
    {path: '', component: OutingIndexComponent},
    {path: 'create', component: OutingCreateComponent},
    {path: 'detail/:id', component: OutingDetailComponent},
    {path: 'edit/:id', component: OutingEditComponent},
    {path: 'delete/:id', component: OutingDeleteComponent}
  ]
},

  {
  path: 'interests', children: [
    {path: '', component: InterestsIndexComponent},
    {path: 'create', component: InterestsCreateComponent},
    {path: 'detail/:id', component: InterestsDetailComponent},
    {path: 'edit/:id', component: InterestsEditComponent},
    {path: 'delete/:id', component: InterestsDeleteComponent}
  ]
},
{path: '**', component: RegistrationComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    OutingIndexComponent,
    OutingCreateComponent,
    InterestsCreateComponent,
    InterestsIndexComponent,
    OutingDetailComponent,
    OutingEditComponent,
    OutingDeleteComponent,
    InterestsDetailComponent,
    InterestsEditComponent,
    InterestsDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
  ],
  providers: [
    AuthService,
    OutingsService,
    InterestsService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
