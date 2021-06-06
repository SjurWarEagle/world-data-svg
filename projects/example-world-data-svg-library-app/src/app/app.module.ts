import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WorldCountryDataLibModule} from "../../../world-data-svg-library/src/lib/components/world-country/world-country-module";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatExpansionModule,
    WorldCountryDataLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
