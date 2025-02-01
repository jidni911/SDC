import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeMessengerComponent } from './bike-messenger/bike-messenger.component';

const routes: Routes = [
  {path: '', redirectTo: 'bikeMessenger', pathMatch: 'full'},
  {path: 'bikeMessenger', component: BikeMessengerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BikeMessengerRoutingModule { }
