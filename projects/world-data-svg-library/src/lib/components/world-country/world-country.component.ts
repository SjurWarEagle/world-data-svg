import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {WorldData} from "../../types/world-data";
import {SvgLoaderService} from "../../services/svg-loader.service";

@Component({
  selector: 'world-country',
  templateUrl: './world-country.component.html',
  styleUrls: ['./world-country.component.css']
})
export class WorldCountryComponent {
  @ViewChild('dataContainer')
  private dataContainer!: ElementRef;


  @Input()
  public set worldData(worldData: WorldData) {

    this.svgLoaderService.load(worldData).then((svgAsString) => {
      this.dataContainer.nativeElement.innerHTML=svgAsString;
    });
  }

  constructor(private svgLoaderService: SvgLoaderService) {
  }

}
