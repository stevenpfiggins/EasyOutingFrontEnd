import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api_Url } from "../../environments/environment.prod";


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  getOutingsByInterestsMatch() {
    return this._http.get(`${Api_Url}/api/Outing/Feed`, {headers: this.getHeaders() });
  }

  getOuting(id: string) {
    return this._http.get(`${Api_Url}/api/Outing/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
