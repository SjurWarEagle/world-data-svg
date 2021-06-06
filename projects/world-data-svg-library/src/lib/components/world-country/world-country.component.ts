import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {WorldData} from "../../types/world-data";
import {SvgLoaderService} from "../../services/svg-loader.service";

@Component({
  selector: 'world-country',
  templateUrl: './world-country.component.html',
  styleUrls: ['./world-country.component.css']
})
export class WorldCountryComponent implements OnInit {
  @ViewChild('dataContainer')
  dataContainer!: ElementRef;

  @Input()
  public set worldData(worldData: WorldData) {

    this.svgLoaderService.load(worldData).then((svgString) => {
      this.dataContainer.nativeElement.innerHTML = svgString;
    });
  }


  constructor(private svgLoaderService: SvgLoaderService) {
  }


  public ngOnInit(): void {
  }

}
