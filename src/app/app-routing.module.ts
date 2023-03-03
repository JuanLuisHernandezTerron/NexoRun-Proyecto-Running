import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { BotonComponent } from './modules/boton/boton.component';
import { EventCardComponent } from './modules/commons/event-card/event-card.component';
import { LoginComponent } from './modules/login/login.component';
import { InputComponent } from './modules/commons/input/input.component';

const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    { path: '', component: HomeComponent  },
    { path: 'register', component: RegistrationComponent},
    { path: 'login', component: LoginComponent},
    { path: 'events', component: EventCardComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
