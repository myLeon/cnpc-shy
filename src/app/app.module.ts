import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LdmModule } from './ldm/ldm.module';
import { MomentModule } from 'angular2-moment';
import { Routing } from './app-routing.module';
import { LoaderService } from './_services/loader.service';
import * as moment from 'moment';
// import { PersonnelComponent } from './personnel/personnel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // PersonnelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LdmModule,
    MomentModule,
    Routing
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private loader: LoaderService) {
    moment.locale("zh-CN");
    //console.log("1");
    this.loader.hide(3000);
  }
}
