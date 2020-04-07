import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Platform } from '@ionic/angular';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentSites=[
    {
      name:"Mida RTEMS",nearBy:true
    },
    {name:"Wood Fields",nearBy:false},
    {name:"Ben Abdul",nearBy:false}
  ]
  public loadingProjects = true;
  constructor(private faio: FingerprintAIO,private platform: Platform, private appMinimize: AppMinimize,public messageService:MessageService) { }

  ngOnInit() {
    
//     this.faio.show({})
//   .then((result: any) => console.log(result))
//   .catch((error: any) => console.log(error));
//   this.platform.backButton.subscribe(() => {
//     this.appMinimize.minimize();
//  });
}

ionViewDidEnter	(){
  this.platform.backButton.subscribe(() => {
    this.appMinimize.minimize();
 });
  }
ionViewWillLeave	(){
  this.platform.backButton.unsubscribe();
  }
}
