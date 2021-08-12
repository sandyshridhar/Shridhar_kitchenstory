import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { LoginfailsComponent } from './loginfails/loginfails.component';
import { AdminindexComponent } from './adminindex/adminindex.component';

// @Injectable({
//   providedIn: 'root'
// })
const appRoutes: Routes = [
  { path: '', component: IndexComponent },

  { path: 'cart', component: CartComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'paymentsuccess',component:PaymentsuccessComponent},
  {path:'loginfails',component:LoginfailsComponent},
  {path:'adminindex',component:AdminindexComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingService {

  constructor() { }
}
