import { Component, OnInit } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
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
  constructor(private faio: FingerprintAIO) { }

  ngOnInit() {
    this.faio.show({})
  .then((result: any) => console.log(result))
  .catch((error: any) => console.log(error));
  }

}
