import { Component, OnInit } from '@angular/core';
import { WorldData } from 'world-data-svg-library';
import * as Chance from 'chance';
import { timer } from 'rxjs';

@Component({
  selector: 'app-different-sizes',
  templateUrl: './different-sizes.component.html',
  styleUrls: ['./different-sizes.component.scss'],
})
export class DifferentSizesComponent implements OnInit {
  public worldData: WorldData = {
    colors: [],
    countries: [],
  };

  public ngOnInit(): void {
    const chance = new Chance();
    timer(0, 500).subscribe(() => {

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
        countries: [],
      };

      for (let i = 0; i < 200; i++) {
        this.worldData.countries.push({
          isoCode: chance.country(),
          value: chance.integer({ min: 0, max: 30 }),
        });
      }
    });
  }
}
