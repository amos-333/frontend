import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-manageorders',
  templateUrl: './manageorders.component.html',
  styleUrls: ['./manageorders.component.css']
})
export class ManageordersComponent implements OnInit {

  constructor(private auth: AuthService) {
    this.fetchData();
  }
  fetchData = () => {
    this.auth.vieworders().subscribe((res) => {
      console.log(this.data);
      this.data = res.data;
    });
  };

  ngOnInit(): void {}
  data: any;

  
}
