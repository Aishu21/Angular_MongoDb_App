import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommoditiesService {
  uri = 'http://localhost:4000/products';
  constructor(private http: HttpClient) { }

  addCommodity(CommodityName:string, CommodityDescription:string, CommodityPrice:number) {
    const obj = {
      CommodityName,
      CommodityDescription,
      CommodityPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
  getCommodities() {
    return this
           .http
           .get(`${this.uri}`);
  }
}
