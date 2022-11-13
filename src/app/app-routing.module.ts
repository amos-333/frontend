import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaraddComponent } from './caradd/caradd.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HotdealsComponent } from './hotdeals/hotdeals.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RecentaddComponent } from './recentadd/recentadd.component';
import { RegisterComponent } from './register/register.component';
import { UpdatesComponent } from './updates/updates.component';
import { ViewcarouselComponent } from './viewcarousel/viewcarousel.component';
import { ViewhotdealsComponent } from './viewhotdeals/viewhotdeals.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { ViewrecentComponent } from './viewrecent/viewrecent.component';
import { ViewupdatesComponent } from './viewupdates/viewupdates.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'caradd', component: CaraddComponent },
      { path: 'hotdeals', component: HotdealsComponent },
      { path: 'recentadd', component: RecentaddComponent },
      { path: 'updates', component: UpdatesComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'viewproduct', component: ViewproductComponent },
      { path: 'viewhotdeals', component: ViewhotdealsComponent },
      { path: 'viewcarousel', component: ViewcarouselComponent },
      { path: 'viewupdates', component: ViewupdatesComponent },
      { path: 'viewrecent', component: ViewrecentComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
