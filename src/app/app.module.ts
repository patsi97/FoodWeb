import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RatingModule} from "ng-starrating";
import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RatingModule
  ],
  providers: [],

})
export class AppModule { }
