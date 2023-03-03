import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { BotonComponent } from './modules/boton/boton.component';
import { EventCardComponent } from './modules/commons/event-card/event-card.component';

const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    { path: 'register', component: RegistrationComponent},
    { path: '', component: EventCardComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
