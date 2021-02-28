import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommoditiesAddComponent } from './commodities-add/commodities-add.component';
import { CommoditiesGetComponent } from './commodities-get/commodities-get.component';

const routes: Routes = [
  {
    path: 'commodity/add',
    component: CommoditiesAddComponent
  },
  {
    path: 'commodities',
    component: CommoditiesGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }