import { GetStartComponent } from './home/get-start/get-start.component';
import { ProductsComponent } from './home/products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{MatStepperModule} from '@angular/material/stepper'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SupportComponent } from './home/support/support.component';
import { DocsComponent } from './home/docs/docs.component';
import { PartnerComponent } from './home/partner/partner.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ConnectUsComponent } from './home/connect-us/connect-us.component';
import { LoginComponent } from './home/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Register2Component } from './home/register2/register2.component';
import { CommonModule } from '@angular/common';
const appRoutes: Routes=[
{path:'',component:HomeComponent},
{path:'products', component:ProductsComponent},
{path:'support', component:SupportComponent},
{path:'docs', component:DocsComponent},
{path:'partner',component:PartnerComponent},
{path:'aboutUs',component:AboutUsComponent},
{path:'connectUs',component:ConnectUsComponent},
{path:'login',component:LoginComponent},
{path:'getStart',component:GetStartComponent},
{path:'registerNext', component:Register2Component}


];
const material=[

];
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SupportComponent,
    DocsComponent,
    PartnerComponent,
    AboutUsComponent,
    ConnectUsComponent,
    GetStartComponent,
    LoginComponent,
    Register2Component,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatStepperModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
