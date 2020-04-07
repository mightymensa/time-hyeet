import { Component, OnInit } from "@angular/core";
import { AlertController, LoadingController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { MessageService } from "src/app/services/message.service";
import { Storage } from '@ionic/storage';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public username = "karthur1";
  public pincode = 1244;
  public errorMessage = "err"
  public errorLoggingIn = false;
  public url = "http://69fd4f31.ngrok.io"
  constructor(private geolocation: Geolocation,public loadingCtrl: LoadingController,private storage: Storage, public alertController: AlertController, public router: Router, public messageService: MessageService) {}

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        alert(JSON.stringify(resp.coords.latitude) + " " + JSON.stringify(resp.coords.longitude));
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch(async error => {
        // let erralert = await this.alertController.create({
        //   header: "GPS error",
        //   subHeader: "",
        //   message: JSON.stringify(error),
        //   buttons: [
        //     {
        //       text: "Ok"
        //     }
        //   ]
        // });

        // await erralert.present();
        //  alert('Error getting location' + JSON.stringify(error));
      });
  }
  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: data.first_name.toUpperCase()+ " " +data.last_name.toUpperCase(),
      subHeader: "",
      message: "Login successful.",
      buttons: [
        {
          text: "Ok",
          handler: () => {
            this.router.navigateByUrl("home");
          }
        }
      ]
    });

    await alert.present();
  }
  async loginUser() {
    let loading = await this.loadingCtrl.create({});
    loading.present();
    this.errorLoggingIn = false;
    this.messageService.login(this.username, this.pincode,this.url).subscribe(
      data => {
        loading.dismiss()
        console.log(data)
        if(data['success']){
          this.messageService.userID = data['data']['id']
          this.messageService.baseUrl = this.url;
          this.messageService.loadProjects();
          this.presentAlert(data['data']);
          this.storage.set('user', data['data']);
        }else{
          this.errorMessage = data['data']!=null?data['data']:"wrong username or password";
          this.errorLoggingIn = true;
        }
        // return data;
      },
      err => {
        loading.dismiss()
        console.log(err)
        this.errorMessage = "connection failed";
        this.errorLoggingIn = true;
      }
    );
    // this.router.navigateByUrl("home")
  }
}
