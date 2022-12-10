import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private auth: AuthService) {
    this.getCartData();
    if (this.cartData) {
      this.totalAmount();
    }
  }

  //TO GET TOTAL AMOUNT
  totalAmount() {
    let userId = { userId: localStorage.getItem('user_id') };
    this.auth.totalAmount(userId).subscribe((res) => {
      console.log(res);

      this.total =
        res.total[0].totalAmount === undefined ? 0 : res.total[0].totalAmount;
      console.log(this.total);
    });
  }

  //TO GET CART DATA
  getCartData() {
    let userId = { userId: localStorage.getItem('user_id') };
    this.auth.getCart(userId).subscribe((res) => {
      console.log(res);
      this.cartData = res.data;
    });
  }

  //CART QUANTITY ADJUSTMENT
  quantityAdjust(incOrDec: any, productId: any) {
    let value = {
      user: localStorage.getItem('user_id'),
      product: productId,
      value: incOrDec,
    };
    this.auth.quantityAdjust(value).subscribe((res) => {
      this.getCartData();
      this.totalAmount();
    });
  }

  cartData: any;
  productData: any;
  total: any = 0;

  ngOnInit(): void {}
}
