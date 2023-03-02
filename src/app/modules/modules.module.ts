import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from './commons/popup/popup.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ]
})
export class ModulesModule { }
