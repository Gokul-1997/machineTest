import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component'
import { BookingComponent } from './booking/booking.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'book',
    component:BookingComponent
  },
  {
    path:'history',
    component:HistoryComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
