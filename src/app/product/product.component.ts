import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    let id = { id: activatedRoute.snapshot.paramMap.get('id') };

    auth.getOneHotDealProduct(id).subscribe((res) => {
      this.product = res.data;
      console.log(this.product);
    });
  }

  addCart($event:Event,productId:any){
    $event.preventDefault()
    let details={
      userId:localStorage.getItem('user_id'),
      productId:productId
    }
    console.log(details);
    
    this.auth.addCart(details).subscribe(res=>{
      
      
      console.log(res);
      
    })
  }

  product: any;

  ngOnInit(): void {}
}
