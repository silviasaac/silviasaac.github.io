import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MainPageComponent } from './main-page/main-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';



@NgModule({
  declarations: [
    MainPageComponent,
    BannerComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule,
  ]
})
export class HomePageModule { }
