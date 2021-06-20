import { Component, OnInit } from '@angular/core';
import { WorldData } from 'world-data-svg-library';
import * as Chance from 'chance';
import { timer } from 'rxjs';

@Component({
  selector: 'app-random-countries',
  templateUrl: './random-countries.component.html',
  styleUrls: ['./random-countries.component.scss'],
})
export class RandomCountriesComponent implements OnInit {
  public worldData: WorldData = {
    colors: [],
    countries: [],
  };

  constructor() {}

  public ngOnInit(): void {
    const chance = new Chance();
    timer(0, 1000).subscribe(() => {
      this.worldData = {
        colors: [
          {
            color: '#FF0000',
            max: 10,
            min: 0,
          },
          {
            color: '#00FF00',
            max: 20,
            min: 10,
          },
          {
            color: '#FFFF00',
            max: 30,
            min: 20,
          },
        ],
        countries: [
          {
            isoCode: 'IS',
            value: 0,
          },
          {
            isoCode: 'DE',
            value: 0,
          },
          {
            isoCode: 'US',
            value: 0,
          },
          {
            isoCode: 'AU',
            value: 0,
          },
          {
            isoCode: 'BR',
            value: 0,
          },
          {
            isoCode: 'SA',
            value: 0,
          },
          {
            isoCode: 'NE',
            value: 0,
          },
          {
            isoCode: 'ZM',
            value: 0,
          },
          {
            isoCode: 'JP',
            value: 0,
          },
          {
            isoCode: 'CH',
            value: 0,
          },
        ],
      };

      this.worldData.countries.forEach((item) => {
        item.value = chance.integer({
          min: 0,
          max: 30,
        });
      });
    });
  }
}
