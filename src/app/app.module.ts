import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { SearchbarComponent } from './demo/searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './demo/searchbar/modal/modal.component';
import {  NgSelectModule } from '@ng-select/ng-select';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { AuthModule } from './auth/auth.module';
import { SignupComponent } from './signup/signup.component';
import { AuthInterceptor } from './auth/auth.interceptor';









@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        DemoComponent,
        SearchbarComponent,
        ModalComponent,
        SignupComponent
        
        
        
       
        
    ],
    providers: [
        
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgSelectModule,
        HttpClientModule,
        NgSlimScrollModule,
        AuthModule
       
     
    ]
})
export class AppModule { }
