import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './views/feature1/feature1.component';
import { NewFeature1Component } from './views/new-feature1/new-feature1.component';
import { IdFeature1Component } from './views/id-feature1/id-feature1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    Feature1Component,
    NewFeature1Component,
    IdFeature1Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
