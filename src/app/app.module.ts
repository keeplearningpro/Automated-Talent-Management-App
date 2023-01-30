import { BasicAuthHttpInterceptorService } from './service/basic-auth-http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationInfoComponent } from './certification-info/certification-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [
    AppComponent,
    CertificationInfoComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
