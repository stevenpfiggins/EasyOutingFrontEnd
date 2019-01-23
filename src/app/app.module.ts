//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { 
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule,  
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { JwtHelperService, JwtModule } from "@auth0/angular-jwt";

//Services
import { AuthService } from './services/auth.service';
import { OutingsService } from './services/outings.service';
import { InterestsService } from './services/interests.service';
import { AuthGuard } from './guards/auth.guard';
import { HomeService } from './services/home.service';

//Components
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { OutingIndexComponent } from './components/outing/outing-index/outing-index.component';
import { OutingCreateComponent } from './components/outing/outing-create/outing-create.component';
import { OutingDetailComponent } from './components/outing/outing-detail/outing-detail.component';
import { OutingEditComponent } from './components/outing/outing-edit/outing-edit.component';
import { OutingDeleteComponent } from './components/outing/outing-delete/outing-delete.component';
import { InterestsCreateComponent } from './components/interests/interests-create/interests-create.component';
import { InterestsIndexComponent } from './components/interests/interests-index/interests-index.component';
import { InterestsDetailComponent } from './components/interests/interests-detail/interests-detail.component';
import { InterestsEditComponent } from './components/interests/interests-edit/interests-edit.component';
import { InterestsDeleteComponent } from './components/interests/interests-delete/interests-delete.component';
import { HomeIndexComponent } from './components/home-feed/home-index/home-index.component';
import { HomeDetailsComponent } from "./components/home-feed/home-details/home-details.component";
import { AdminIndexComponent } from './components/admin/admin-index/admin-index.component';
import { AdminOutingsComponent } from './components/admin/admin-outings/admin-outings.component';
import { AdminInterestsComponent } from './components/admin/admin-interests/admin-interests.component';
import { AdminInterestsDeleteComponent } from './components/admin/admin-interests-delete/admin-interests-delete.component';
import { AdminOutingsDeleteComponent } from './components/admin/admin-outings-delete/admin-outings-delete.component';

const routes = [
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  
  {path: 'home', children: [
    {path: '', component: HomeIndexComponent},
    {path: 'details/:id', component: HomeDetailsComponent}
  ]},
  
  {path: 'admin', canActivate: [AuthGuard], children: [
    {path: '', component: AdminIndexComponent},
    {path: 'outings', component: AdminOutingsComponent},
    {path: 'interests', component: AdminInterestsComponent},
    {path: 'interestsdelete/:id', component: AdminInterestsDeleteComponent},
    {path: 'outingsdelete/:id', component: AdminOutingsDeleteComponent}
  ]},
  
  {
    path: 'outings', canActivate: [AuthGuard], children: [
      {path: '', component: OutingIndexComponent},
      {path: 'create', component: OutingCreateComponent},
      {path: 'detail/:id', component: OutingDetailComponent},
      {path: 'edit/:id', component: OutingEditComponent},
      {path: 'delete/:id',component: OutingDeleteComponent}
    ]
  },
  
  {
    path: 'interests', canActivate: [AuthGuard], children: [
      {path: '', component: InterestsIndexComponent},
      {path: 'create', component: InterestsCreateComponent},
      {path: 'detail/:id', component: InterestsDetailComponent},
      {path: 'edit/:id', component: InterestsEditComponent},
      {path: 'delete/:id', component: InterestsDeleteComponent}
    ]
  },

  {path: '**', component: HomeIndexComponent }
];

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HeaderComponent,
    OutingIndexComponent,
    OutingCreateComponent,
    OutingDetailComponent,
    OutingEditComponent,
    OutingDeleteComponent,
    InterestsCreateComponent,
    InterestsIndexComponent,
    InterestsDetailComponent,
    InterestsEditComponent,
    InterestsDeleteComponent,
    AdminOutingsComponent,
    AdminInterestsComponent,
    AdminIndexComponent,
    HomeIndexComponent,
    HomeDetailsComponent,
    AdminInterestsDeleteComponent,
    AdminOutingsDeleteComponent,
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
    MatCheckboxModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    AuthService,
    OutingsService,
    InterestsService,
    HomeService,
    AuthGuard,
    JwtHelperService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
