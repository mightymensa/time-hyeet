import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(public router:Router,private storage: Storage){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.storage.get("user").then(usr=>{
        if(usr){
          return true;
        }else{
          this.router.navigateByUrl("login")
          return false;
        }
      }).catch(err=>{
        this.router.navigateByUrl("login")
        return false;
      })
      // return true;
  }
  
}
