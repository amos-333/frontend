import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private auth: AuthService) {}

  name = '';
  price = '';
  images = '';
  model = '';
  description = '';
  company = '';
  tag = '';
  products = () => {
    let user = {
      name: this.name,
      images: this.images,
      model: this.model,
      description: this.description,
      company: this.company,
      price: this.price,
      tag: this.tag,
    };

    this.auth.addProduct(user).subscribe((res: any) => {
      console.log(res);
      if (res.status === 'error') {
        // alert('something went wrong')
        this.isError = true;
      } else {
        // alert('Successfully Added')
        this.name = '';
        this.price = '';
        this.images = '';
        this.model = '';
        this.description = '';
        this.company = '';
        this.isError = false;
        this.isChange = true;
      }
    });
  };

  isError: any;
  isChange: any = false;

  ngOnInit(): void {}
}
