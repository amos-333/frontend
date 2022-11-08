import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  name=""
  email=""
  address=""
  phone=""
  password=""

  submitClicked(){
    let user={
      name:this.name,
      email:this.email,
      address:this.address,
      phone:this.phone,
      password:this.password,
    }

    this.auth.register(user).subscribe(res=>{
      console.log(res.success);
      if (res.success) {
        this.router.navigate(["/login"])
      } else {
        console.log("failed");
        
      }
      
    })
    
  }

  ngOnInit(): void {
  }

}
