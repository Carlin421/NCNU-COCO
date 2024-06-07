import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FindactivityComponent } from './findactivity/findactivity.component';
import { FindsponsorComponent } from './findsponsor/findsponsor.component';
import { PostactivityComponent } from './postactivity/postactivity.component';
import { PostsponsorComponent } from './postsponsor/postsponsor.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupclubComponent } from './signupclub/signupclub.component';
import { SignupbrandComponent } from './signupbrand/signupbrand.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswdComponent } from './forgot-passwd/forgot-passwd.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    FindactivityComponent,
    FindsponsorComponent,
    PostactivityComponent,
    PostsponsorComponent,
    SignupclubComponent,
    SignupbrandComponent,
    ForgotPasswdComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
