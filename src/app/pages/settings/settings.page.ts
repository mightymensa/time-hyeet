import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private platform: Platform,private appMinimize: AppMinimize,public router:Router,public messageService:MessageService) { }

  ngOnInit() {
  }
  ionViewDidEnter	(){
  //   this.platform.backButton.subscribe(() => {
  //     this.router.navigateByUrl("home");
  //  });
    }
  ionViewWillLeave	(){
    // this.platform.backButton.unsubscribe();
    }

  goBack(){
    this.router.navigateByUrl("home")
  }
}
