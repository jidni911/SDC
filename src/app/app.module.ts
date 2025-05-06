import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './components/web/web.component';
import { IntroComponent } from './components/intro/intro.component';
// import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardDeveloperComponent } from './components/dashboard-developer/dashboard-developer.component';
import { DashboardUserComponent } from './components/dashboard-user/dashboard-user.component';
import { DashboardSellerComponent } from './components/dashboard-seller/dashboard-seller.component';
import { BugReportComponent } from './components/bug-report/bug-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { AuthInterceptor } from './interceptors/auth-interceptor.service';
import { BikeMessengerComponent } from './bike-messenger/bike-messenger/bike-messenger.component';
import { SharedModule } from './shared/shared.module';
import { MemoComponent } from './products/memo/memo.component';//TODO check
import { ChatComponent } from './componenets/chat/chat.component';
import { MerchandiseModule } from './merchandise/merchandise.module';
import { ContactComponent } from './components/intro/contact/contact.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { AuthenticationModule } from './authentication/authentication.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    IntroComponent,
    // SigninComponent,
    SignupComponent,
    ResetpassComponent,
    DashboardComponent,
    DashboardAdminComponent,
    DashboardDeveloperComponent,
    DashboardUserComponent,
    DashboardSellerComponent,
    BugReportComponent,
    DemoComponent,
    BikeMessengerComponent,
    ChatComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MerchandiseModule,
    AuthenticationModule
    // BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
