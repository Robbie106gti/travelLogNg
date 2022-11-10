import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './views/feature2/feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';



@NgModule({
  declarations: [
    Feature2Component
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ]
})
export class Feature2Module { }
