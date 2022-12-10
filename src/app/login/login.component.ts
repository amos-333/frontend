import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  email = '';
  password = '';

  loginClicked() {
    let user = {
      email: this.email,
      password: this.password,
    };
    console.log(user);
    this.auth.login(user).subscribe((res) => {
      console.log(res);
      if (res.success) {
        localStorage.setItem('token_id', res.token);
        localStorage.setItem('user_id', res.user.id);
        localStorage.setItem('isAdmin', res.isAdmin);
        this.router.navigate(['/']);
      } else {
        console.log('authentication failed');
      }
    });
  }
  ngOnInit(): void {}
}
