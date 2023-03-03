import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { EventCardComponent } from './commons/event-card/event-card.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './commons/input/input.component';
import { InputPassComponent } from './commons/input-pass/input-pass.component';
import { InputMailComponent } from './commons/input-mail/input-mail.component';
import { InputCheckboxComponent } from './commons/input-checkbox/input-checkbox.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent,
    EventCardComponent,
    LoginComponent,
    InputComponent,
    InputPassComponent,
    InputMailComponent,
    InputCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoreModule
  ]
})
export class ModulesModule { }
