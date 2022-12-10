import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private auth: AuthService) {
    let userId = { userId: localStorage.getItem('user_id') };
    auth.getCart(userId).subscribe((res) => {
      console.log(res);
      this.cartData = res.data;
    });

    auth.totalAmount(userId).subscribe((res) => {
      console.log(res);

      this.total =
        res.total[0].totalAmount === undefined ? 0 : res.total[0].totalAmount;
      console.log(this.total);
    });
  }

  cartData: any;
  productData: any;
  total: any;

  ngOnInit(): void {}
}
