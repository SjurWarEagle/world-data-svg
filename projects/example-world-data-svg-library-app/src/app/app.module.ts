import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorldCountryDataLibModule } from '../../../world-data-svg-library/src/lib/components/world-country/world-country-module';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RandomCountriesComponent } from './components/random-countries/random-countries.component';
import { RandomValuesComponent } from './components/random-values/random-values.component';
import { DifferentSizesComponent } from './components/different-sizes/different-sizes.component';
import { SimpleComponent } from './components/simple/simple.component';
import { BorderComponent } from './components/border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomCountriesComponent,
    RandomValuesComponent,
    DifferentSizesComponent,
    SimpleComponent,
    BorderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatExpansionModule,
    WorldCountryDataLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
