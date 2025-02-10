import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {path: '', redirectTo: 'homePage', pathMatch: 'full'},
  {path: 'homePage', component: HomePageComponent},
  {path: 'createPost', component: CreatePostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
