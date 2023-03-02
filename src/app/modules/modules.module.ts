import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ModulesModule { }
