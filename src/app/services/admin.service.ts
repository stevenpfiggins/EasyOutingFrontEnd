import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Api_Url } from '../../environments/environment.prod'; 

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) { }

  getOutings() {
    return this._http.get(`${Api_Url}/api/Outing`, { headers: this.getHeaders() });
  }

  getInterests() {
    return this._http.get(`${Api_Url}/api/Interests`, { headers: this.getHeaders() });
  }

  deleteOuting(id: number) {
    return this._http.delete(`${Api_Url}/api/Outing/${id}`, { headers: this.getHeaders() });
  }

  deleteInterests(id:number) {
    return this._http.delete(`${Api_Url}/api/Interests/${id}`, { headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }
}
