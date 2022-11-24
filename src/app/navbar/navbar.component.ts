import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logOutClick() {
    localStorage.removeItem('token_id');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('user_id');
    this.router.navigate(['/login']);
  }
} 
