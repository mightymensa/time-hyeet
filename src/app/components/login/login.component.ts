import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private geolocation: Geolocation,public alertController: AlertController,public router:Router) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      alert(JSON.stringify(resp.coords.latitude)+" " +JSON.stringify(resp.coords.longitude))
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       alert('Error getting location' + JSON.stringify(error));
     });
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'John Badu Acquah',
      subHeader: '',
      message: 'Login successful.',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.router.navigateByUrl("home")
        }
      }]
    });

    await alert.present();
  }
  loginUser(){
    this.presentAlert();
    // this.router.navigateByUrl("home")
  }

}
