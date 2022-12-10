import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { UpdatesComponent } from './updates/updates.component';
import { ViewcarouselComponent } from './viewcarousel/viewcarousel.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewupdatesComponent } from './viewupdates/viewupdates.component';
import { ManageordersComponent } from './manageorders/manageorders.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'orderplaced', component: OrderplacedComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'checkout',canActivate:[AuthGuard], component: CheckoutComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'manageOrder', component: ManageordersComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'viewproduct', component: ViewproductComponent },
      { path: 'viewcarousel', component: ViewcarouselComponent },
      { path: 'viewupdates', component: ViewupdatesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
