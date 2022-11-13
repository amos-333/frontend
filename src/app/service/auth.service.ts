import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // Add Section
  register=(user:any)=>{
    return this.http.post<any>('http://localhost:3000/api/signup',user);
  };
  addCar=(product:any)=>{
    return this.http.post<any>('http://localhost:3000/api/addproduct',product);
  };
  hotdeals=(hotdeal:any)=>{
    return this.http.post<any>('http://localhost:3000/api/hotdeals',hotdeal);
  };
  recents=(recent:any)=>{
    return this.http.post<any>('http://localhost:3000/api/recents',recent);
  };


  // view section
  viewproducts=()=>{
    return this.http.get<any>('http://localhost:3000/api/viewproducts',);
  };
  viewhotdeals=()=>{
    return this.http.get<any>('http://localhost:3000/api/viewhotdeals',);
  };
  viewrecents=()=>{
    return this.http.get<any>('http://localhost:3000/api/viewproducts',);
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


}
