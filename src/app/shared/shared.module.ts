import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { Unsubscriber } from './unsubscriber/unsubscriber';
import { View404Component } from './view404/view404.component';



@NgModule({
  declarations: [
    Unsubscriber,
    View404Component
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
