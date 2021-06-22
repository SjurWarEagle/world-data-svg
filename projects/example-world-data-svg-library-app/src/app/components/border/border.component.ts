import { Component, OnInit } from '@angular/core';
import {WorldData} from "world-data-svg-library";

@Component({
  selector: 'app-border',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent implements OnInit {

  public worldData: WorldData = {
    colors: [],
    countries: [],
  };

  constructor() { }

  ngOnInit(): void {
    this.worldData = {
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
  }

}
