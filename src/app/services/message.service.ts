import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public baseUrl = environment.baseUrl;
  constructor(public http: HttpClient,) { }
  login(username,pin){
    this.http.post(this.baseUrl+"/login",{username:username,pin:pin}).subscribe(data=>{},err=>{})
  }
}
