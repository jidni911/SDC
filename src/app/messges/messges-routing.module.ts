import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessgesComponent } from './messges/messges.component';

const routes: Routes = [
  { path: '', redirectTo: 'messegeLists', pathMatch: 'full' },
  { path: 'messegeLists', component: MessgesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessgesRoutingModule { }
