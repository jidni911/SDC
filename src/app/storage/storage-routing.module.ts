import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  {path: '', redirectTo: 'storage', pathMatch: 'full'},
  {path: 'storage', component: StorageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
