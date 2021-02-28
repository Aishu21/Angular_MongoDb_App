import { Component, OnInit } from '@angular/core';
import { CommoditiesService } from '../commodities.service';
import Commodity from '../Commodity';
@Component({
  selector: 'app-commodities-get',
  templateUrl: './commodities-get.component.html',
  styleUrls: ['./commodities-get.component.css']
})
export class CommoditiesGetComponent implements OnInit {

  commodities: Commodity[];
  constructor(private ps: CommoditiesService) { }

  ngOnInit() {
    this.ps
      .getCommodities()
      .subscribe((data: Commodity[]) => {
        this.commodities = data;
    });
  }

}
