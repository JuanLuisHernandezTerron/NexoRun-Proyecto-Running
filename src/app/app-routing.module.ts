import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { BotonComponent } from './modules/boton/boton.component';
import { EventCardComponent } from './modules/commons/event-card/event-card.component';
import { LoginComponent } from './modules/login/login.component';
import {EventodetalleComponent} from './modules/eventodetalle/eventodetalle.component';

const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    { path: '', component: EventCardComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'events', component: EventCardComponent},
    { path: 'boton', component: BotonComponent},
    { path: 'eventodetalle',component: EventodetalleComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
