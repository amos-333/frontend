import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdatesComponent } from './updates/updates.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewcarouselComponent } from './viewcarousel/viewcarousel.component';
import { ViewupdatesComponent } from './viewupdates/viewupdates.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsComponent } from './products/products.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AuthService } from './service/auth.service';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ManageordersComponent } from './manageorders/manageorders.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    DashboardComponent,
    UpdatesComponent,
    CarouselComponent,
    ViewproductComponent,
    ViewcarouselComponent,
    ViewupdatesComponent,
    CheckoutComponent,
    ProductsComponent,
    OrderplacedComponent,
    ManageordersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule
  
  ],
  providers: [AuthService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
