import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { Unsubscriber } from './unsubscriber/unsubscriber';
import { View404Component } from './view404/view404.component';
import { DropdownSeachableComponent } from './dropdown-seachable/dropdown-seachable.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Unsubscriber,
    View404Component,
    DropdownSeachableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    DropdownSeachableComponent
  ]
})
export class SharedModule { }
