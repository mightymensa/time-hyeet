import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public loadingProjects = false;
  public baseUrl = environment.baseUrl;
  public userID = 0;
  public projects = [];
  constructor(public http: HttpClient,public router:Router,private storage: Storage) { 
    this.storage.get('user').then((val) => {
      if(val){
        console.log("user",val)
        this.userID = val['id'];
        this.storage.get('projects').then((val2) => {
          if(val2){
            console.log("projects",val2)
            this.projects = val2;
          }
        });
      }else{
        console.log("no val")
      }
    }).catch(err=>{
      console.log("couldnt get user",err)
    });
  }
  login(username,pin,url){
    // console.log((url==""?this.baseUrl:url)+"/login",pin,username);
    return this.http.post((url==""?this.baseUrl:url)+"/login",{username:username,pincode:pin})
  }
  getMyProjects(){
    // console.log(this.baseUrl+"/user/enrolments"+userID);
    return this.http.get(this.baseUrl+"/user/enrolments/"+this.userID)
  }
  distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1/180;
      var radlat2 = Math.PI * lat2/180;
      var theta = lon1-lon2;
      var radtheta = Math.PI * theta/180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180/Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit=="K") { dist = dist * 1.609344 }
      if (unit=="N") { dist = dist * 0.8684 }
      return dist;
    }
  }
  loadProjects(){
    this.loadingProjects = true;
      this.getMyProjects().subscribe(data=>{
        if(data['success']){
          this.projects = data['data'];
          this.storage.set('projects', data['data']);
          this.loadingProjects = false;
        }else{
          alert("error loading projects")
        }
      },err=>{
  
      })
  }
  logout(){
    this.storage.clear();
    this.router.navigateByUrl("login");
  }
}
