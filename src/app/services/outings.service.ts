import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Outing } from '../Models/Outing';

const Api_Url = "https://localhost:44311/api"

@Injectable()
export class OutingsService {

  constructor(private _http: HttpClient) { }

  getOutings() {
    return this._http.get(`${Api_Url}/Outing`, {headers: this.getHeaders() });
  }
  
  createOuting(outing: Outing){
    return this._http.post(`${Api_Url}/Outing`, outing, { headers: this.getHeaders() });
  }
  
  getOuting(id: string){
    return this._http.get(`${Api_Url}/Outing/${id}`, { headers: this.getHeaders( )});
  }

  updateOuting(outing: Outing) {console.log(outing)
    return this._http.put(`${Api_Url}/Outing`, outing, {headers: this.getHeaders( )});
  }

  deleteOuting(id: number) {
    return this._http.get(`${Api_Url}/Outing/${id}`, { headers: this.getHeaders() });
  }
  
    private getHeaders() {
      return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    }
}

