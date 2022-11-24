import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService) {
    let tag={tag:'hotdeals'}
    auth.viewhotdeals(tag).subscribe((res) => {
      console.log(res);
      
      this.hotDealsdata= res.data;
    });
  }

  hotDealsdata: any;

  ngOnInit(): void {}
}
