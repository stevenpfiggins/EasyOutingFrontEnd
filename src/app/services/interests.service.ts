import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interests } from '../Models/Interests';
import { Api_Url } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private _http: HttpClient) { }

  getInterests() {
    return this._http.get(`${Api_Url}/api/Interests`, { headers: this.getHeaders() });
  }

  getInterestsByUser() {
    return this._http.get(`${Api_Url}/api/Interests/MyInterests`, { headers: this.getHeaders() });
  }

  getSingleInterests(id: string) {
    return this._http.get(`${Api_Url}/api/Interests/${id}`, { headers: this.getHeaders() });
  }

  getSingleInterestsByEntity(id: string) {
    return this._http.get(`${Api_Url}/api/Interests/InterestsProfile/${id}`, { headers: this.getHeaders() });
  }
  
  createInterests(interests: Interests) {
    return this._http.post(`${Api_Url}/api/Interests`, interests, { headers: this.getHeaders()});
  }
  
  updateInterests(interests: Interests) {
    return this._http.put(`${Api_Url}/api/Interests`, interests, { headers: this.getHeaders() });
  }

  deleteInterests(id:number) {
    return this._http.delete(`${Api_Url}/api/Interests/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
