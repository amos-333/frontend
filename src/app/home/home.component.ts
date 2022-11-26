import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recentsData: any;
  constructor(private auth: AuthService) {
    let tag={tag:'hotdeals'}
    auth.viewHomeProducts(tag).subscribe((res) => {
      console.log(res);
      
      this.hotDealsdata= res.data;
    });

    let tags={tag:'recents'}
    auth.viewHomeProducts(tags).subscribe((res) => {
      console.log(res);
      
      this.recentsData= res.data;
    }); 



  }

  hotDealsdata: any;

  ngOnInit(): void {}
}
