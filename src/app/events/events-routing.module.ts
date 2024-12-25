import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'allevents', pathMatch: 'full'},
  {path: 'allevents', component: AllEventsComponent},
  {path: 'event/:id', component: EventDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
