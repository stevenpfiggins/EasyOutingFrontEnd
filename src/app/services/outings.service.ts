import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Outing } from '../Models/Outing';

const Api_Url = "https://localhost:44311/api"

@Injectable({
  providedIn: 'root'
})
export class OutingsService {

  constructor(private _http: HttpClient) { }

  getOutings() {
    return this._http.get(`${Api_Url}/Outing`, {headers: this.getHeaders() });
  }

  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createOuting(outing: Outing){
    return this._http.post(`${Api_Url}/Outings`, outing, { headers: this.getHeaders()});
  }

  getOuting(id: string){
    return this._http.get(`${Api_Url}/Outings/${id}`, { headers: this.getHeaders( )});
  }
}
