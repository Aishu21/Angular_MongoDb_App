import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { CommoditiesService } from '../commodities.service';

@Component({
  selector: 'app-commodities-add',
  templateUrl: './commodities-add.component.html',
  styleUrls: ['./commodities-add.component.css']
})
export class CommoditiesAddComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: CommoditiesService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      CommodityName: ['', Validators.required ],
      CommodityDescription: ['', Validators.required ],
      CommodityPrice: ['', Validators.required ]
    });
  }

  addCommodity(CommodityName:string, CommodityDescription:string, CommodityPrice:number) {
    this.ps.addCommodity(CommodityName, CommodityDescription, CommodityPrice);
  }

  ngOnInit() {
  }
 

}
