import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration.component';
import { HomeComponent } from './modules/home/home.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { PopupComponent } from './modules/commons/popup/popup.component';

const routes: Routes = [{
  path:'',
  component: SkeletonComponent,
  pathMatch:'prefix',
  children:[
    { path: '', component: HomeComponent  },
    { path: 'register', component: RegistrationComponent},
    { path: 'login', component: PopupComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
