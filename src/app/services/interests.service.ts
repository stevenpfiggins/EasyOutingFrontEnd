import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Interests } from '../Models/Interests';

const ApiUrl = "https://localhost:44311/api";

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private _http: HttpClient) { }

  getInterests() {
    return this._http.get(`${ApiUrl}/Interests`, { headers: this.getHeaders() });
  }

  getSingleInterests(id: string) {
    return this._http.get(`${ApiUrl}/Interests/${id}`, { headers: this.getHeaders() });
  }

  
  createInterests(interests: Interests) {
    return this._http.post(`${ApiUrl}/Interests`, interests, { headers: this.getHeaders()});
  }
  
  updateInterests(interests: Interests) {
    return this._http.put(`${ApiUrl}/Interests`, interests, { headers: this.getHeaders() });
  }

  deleteInterests(id:number) {
    return this._http.delete(`${ApiUrl}/Interests/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
