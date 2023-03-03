import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { BotonComponent } from './modules/boton/boton.component';
import {EventodetalleComponent} from './modules/eventodetalle/eventodetalle.component'
const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    { path: '', component: HomeComponent  },
    { path: 'register', component: RegistrationComponent},
    { path: 'boton', component: BotonComponent},
    {path: 'eventodetalle',component: EventodetalleComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
