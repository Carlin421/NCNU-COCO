import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostsponsorComponent } from './postsponsor/postsponsor.component';
import { PostactivityComponent } from './postactivity/postactivity.component';
import { FindsponsorComponent } from './findsponsor/findsponsor.component';
import { FindactivityComponent } from './findactivity/findactivity.component';
import { SignupclubComponent } from './signupclub/signupclub.component';
import { SignupbrandComponent } from './signupbrand/signupbrand.component';
import { ForgotPasswdComponent } from './forgot-passwd/forgot-passwd.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'homepage', component:HomepageComponent},
  {path: 'findactivity', component:FindactivityComponent},
  {path: 'findsponsor', component:FindsponsorComponent},
  {path: 'postactivity', component:PostactivityComponent},
  {path: 'postsponsor', component:PostsponsorComponent},
  {path: 'signupclub', component:SignupclubComponent},
  {path: 'signupbrand', component:SignupbrandComponent},
  {path: 'forgot-passwd', component:ForgotPasswdComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
