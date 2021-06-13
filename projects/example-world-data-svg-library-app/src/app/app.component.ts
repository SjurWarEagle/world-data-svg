import { Component, OnInit } from '@angular/core';
import { WorldData } from 'world-data-svg-library';
import { timer } from 'rxjs';
import * as Chance from 'chance';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public worldDataBasicStatic: WorldData = {
    colors: [],
    countries: [],
  };

  public worldDataBasicRandom: WorldData = {
    colors: [],
    countries: [],
  };

  public worldDataBasicRandomValues: WorldData = {
    colors: [],
    countries: [],
  };

  public ngOnInit(): void {
    this.worldDataBasicStatic = {
      colors: [
        {
          color: '#ff0000',
          max: 999999999999,
          min: 0,
        },
      ],
      countries: [
        {
          isoCode: 'DE',
          value: 100,
        },
        {
          isoCode: 'US',
          value: 1000,
        },
      ],
    };

    const chance = new Chance();
    timer(0, 1000).subscribe(() => {
      this.worldDataBasicRandom = {
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
        countries: [],
      };

      this.worldDataBasicRandomValues = {
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

      for (let i = 0; i < 200; i++) {
        this.worldDataBasicRandom.countries.push({
          isoCode: chance.country(),
          value: chance.integer({ min: 0, max: 30 }),
        });
      }

      for (
        let i = 0;
        i < this.worldDataBasicRandomValues.countries.length;
        i++
      ) {
        this.worldDataBasicRandomValues.countries[i].value = chance.integer({
          min: 0,
          max: 30,
        });
      }
    });
  }
}
