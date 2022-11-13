import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

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
import { CaraddComponent } from './caradd/caradd.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { RecentaddComponent } from './recentadd/recentadd.component';
import { UpdatesComponent } from './updates/updates.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewcarouselComponent } from './viewcarousel/viewcarousel.component';
import { ViewhotdealsComponent } from './viewhotdeals/viewhotdeals.component';
import { ViewrecentComponent } from './viewrecent/viewrecent.component';
import { ViewupdatesComponent } from './viewupdates/viewupdates.component';


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
    CaraddComponent,
    DashboardComponent,
    HotdealsComponent,
    RecentaddComponent,
    UpdatesComponent,
    CarouselComponent,
    ViewproductComponent,
    ViewcarouselComponent,
    ViewhotdealsComponent,
    ViewrecentComponent,
    ViewupdatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
