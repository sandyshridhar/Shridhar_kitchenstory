import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingService } from './app-routing.service';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FilterpipePipe } from './filterpipe.pipe';
import { CartComponent } from './cart/cart.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { LoginfailsComponent } from './loginfails/loginfails.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { ItemsdetailsComponent } from './itemsdetails/itemsdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    HeaderComponent,
    FilterpipePipe,
    CartComponent,CartComponent, PaymentsuccessComponent, LoginfailsComponent, AdminindexComponent, ItemsdetailsComponent
  ],
  imports: [
    BrowserModule,AppRoutingService,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
