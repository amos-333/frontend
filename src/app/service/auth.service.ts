import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Add Section
  register = (user: any) => {
    return this.http.post<any>('http://localhost:3000/api/signup', user);
  };
  addCar = (product: any) => {
    return this.http.post<any>('http://localhost:3000/api/addproduct', product);
  };
  hotdeals = (hotdeal: any) => {
    return this.http.post<any>('http://localhost:3000/api/hotdeals', hotdeal);
  };
  recents = (recent: any) => {
    return this.http.post<any>('http://localhost:3000/api/recents', recent);
  };

  // view section
  viewproducts = () => {
    return this.http.get<any>('http://localhost:3000/api/viewproducts');
  };
  viewhotdeals = (tag:any) => {
    return this.http.post<any>('http://localhost:3000/api/viewProducts',tag);
  };
  viewrecents = () => {
    return this.http.get<any>('http://localhost:3000/api/viewproducts');
  };
  getOneHotDealProduct = (id: any) => {
    return this.http.post<any>(
      'http://localhost:3000/api/oneHotDealsProdcuts',
      id
    );
  };

  //delete Section

  removeproduct = (data: any) => {
    return this.http.post('http://localhost:3000/api/deleteproduct', data);
  };
  removehotdeals = (data: any) => {
    return this.http.post('http://localhost:3000/api/deletehotdeals', data);
  };
  removerecent = (data: any) => {
    return this.http.post('http://localhost:3000/api/deleterecent', data);
  };

  //VIEW PRODUCT PAGE
  viewproductpage = (data: any) => {
    return this.http.post('http://localhost:3000/api/viewproductpage  ', data);
  };

  //login
  login = (login: any) => {
    return this.http.post<any>('http://localhost:3000/api/login', login);
  };
  addCart(details: any) {
    return this.http.post<any>('http://localhost:3000/api/addToCart ', details);
  }
  getCart(details: any) {
    return this.http.post<any>('http://localhost:3000/api/sendCart ', details);
  }
  addProduct(product: any) {
    return this.http.post<any>(
      'http://localhost:3000/api/addProduct ',
      product
    );
  }
  totalAmount(userId: any) {
    return this.http.post<any>(
      'http://localhost:3000/api/totalAmount ',
      userId
    );
  }
  checkoutOrder(details: any) {
    return this.http.post<any>('http://localhost:3000/api/checkout', details);
  }
  verifyPayment(razorpayResponse: any) {
    return this.http.post<any>(
      'http://localhost:3000/api/verifyPayment',
      razorpayResponse
    );
  }
}
