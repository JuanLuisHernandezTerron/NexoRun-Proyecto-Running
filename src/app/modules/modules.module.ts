import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { EventCardComponent } from './commons/event-card/event-card.component';
import { MaterialModule } from '../core/material/material.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    EventCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    MaterialModule
  ]
})
export class ModulesModule { }
