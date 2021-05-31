import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  toolbar: boolean = false;
  profileData = {
    "name":"Gokul",
    "email":"gokuldsp01@gmail.com",
    "phoneNo":7708161955,
    "address":"Sathy"
  }
  constructor(private http:HttpClient) { }
  show(){
    this.toolbar = true;
  }
  hide(){
    this.toolbar = false;
  }
  allStationGet(){
    return this.http.get('trainStations')
  }
  bookFun(){
    return this.http.get('SeatsAva');
  }
  bookUpdate(id:any,val:any){
    return this.http.put('SeatsAva/'+id,val);
  }
  historyGet(){
    return this.http.get('SeatsAva?Status=true');
  }
  cancelTicket(val:any){
    return this.http.post('cancelTicket',val)
  }
  cancelGet(){
    return this.http.get('cancelTicket')
  }

}
