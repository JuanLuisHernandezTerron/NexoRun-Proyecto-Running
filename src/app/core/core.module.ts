import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';
import { BotonComponent } from '../modules/boton/boton.component';


@NgModule({
  declarations: [
    BotonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    BotonComponent
  ]
})
export class CoreModule { }
