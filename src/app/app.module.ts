import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './pages/home/home.page';
import { SettingsPage } from './pages/settings/settings.page';
import { LoginComponent} from './components/login/login.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { MessageService } from './services/message.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent,HomePage,SettingsPage,LoginComponent],
  entryComponents: [],
  imports: [
    IonicStorageModule.forRoot(),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    MessageService,
    Geolocation,
    AppMinimize,
    FingerprintAIO,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
