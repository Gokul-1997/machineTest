import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from '../app/components/pagenotfound/pagenotfound.component'
const routes: Routes = [

   {
    path: 'login',
    loadChildren : () => import('./components/login/login.module').then(a => a.LoginModule)
   },
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   {
    path: 'home',
    loadChildren : () => import('./components/home/home.module').then(a => a.HomeModule)
   },
   {
    path: 'profile',
    loadChildren : () => import('./components/profile/profile.module').then(a => a.ProfileModule)
   },
   { path: '**', component:PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
