import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './components/intro/intro.component';
// import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardDeveloperComponent } from './components/dashboard-developer/dashboard-developer.component';
import { DashboardSellerComponent } from './components/dashboard-seller/dashboard-seller.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { BugReportComponent } from './components/bug-report/bug-report.component';
import { DemoComponent } from './components/demo/demo.component';
import { ChatComponent } from './componenets/chat/chat.component';

const routes: Routes = [
  // {path: 'images/**', redirectTo: environment.apiUrl + '/images/**'},
  { path: '', redirectTo: '/intro', pathMatch: 'full' },

  // { path: 'home', component: DashboardUserComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'intro', component: IntroComponent },
  // { path: 'signin', component: SigninComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: 'resetpass', component: ResetpassComponent },
  { path: 'chat', component: ChatComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'ROLE_USER', pathMatch: 'full' },
      { path: 'ROLE_ADMIN', component: DashboardAdminComponent },
      { path: 'ROLE_DEV', component: DashboardDeveloperComponent },
      { path: 'ROLE_SELLER', component: DashboardSellerComponent },
      { path: 'ROLE_USER', component: DashboardUserComponent },
    ]
  },
  {
    path: 'auth', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'messges', loadChildren: () => import('./messges/messges.module').then(m => m.MessgesModule)
  },
  {
    path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  },
  {
    path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'bikeMessenger', loadChildren: () => import('./bike-messenger/bike-messenger.module').then(m => m.BikeMessengerModule)
  },
  {
    path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'storage', loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule)
  },
  {
    path: 'merchandise', loadChildren: () => import('./merchandise/merchandise.module').then(m => m.MerchandiseModule)
  },
  // otherwise redirect to intro,
  { path: '**', component: BugReportComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
