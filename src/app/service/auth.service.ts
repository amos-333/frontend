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
  addProduct(product: any) {
    return this.http.post<any>(
      'http://localhost:3000/api/addProduct ',
      product
    );
  }

  // view section
  viewproducts = () => {
    return this.http.get<any>('http://localhost:3000/api/viewall');
  };
  viewHomeProducts = (tag: any) => {
    return this.http.post<any>('http://localhost:3000/api/viewProducts', tag);
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

  //VIEW PRODUCT PAGE
  viewproductpage = (data: any) => {
    return this.http.post('http://localhost:3000/api/viewproductpage', data);
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

  //guard function
  loggedIn() {
    return !!localStorage.getItem('token_id');
  }

  getToken(){
    localStorage.getItem('token_id')

  }

  isAdmin() {
    return localStorage.getItem('isAdmin') === 'true' ? true : false;
  }
}
