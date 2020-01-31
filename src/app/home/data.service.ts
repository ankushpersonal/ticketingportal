import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }

  // fake json stored in myjson
  getTravellers(){
    return this._http.get('https://api.myjson.com/bins/173hwe');
  }

  // fake json stored in myjson
  instructions(){
    return this._http.get('https://api.myjson.com/bins/8nohm');
  }
}
 