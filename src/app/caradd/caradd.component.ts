import { Component, OnInit } from '@angular/core';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css']
})
export class CaraddComponent implements OnInit {

  constructor(private auth:AuthService,) { }

  ngOnInit(): void {
  }


    name='';
    price='';
    images='';
    model='';
    description='';
    company='';

    addCar= ()=>{
      let user={

        name:this.name,
        images:this.images,
        model:this.model,
        description:this.description,
        company:this.company,
        price:this.price
      };  
      
      this.auth.addCar(user).subscribe((res:any)=>{

        console.log(res['status']);
        if (res.status === 'error') {     
          // alert('something went wrong')
          this.isError=true
        } else {
        // alert('Successfully Added')
          this.name='';
          this.price='';
          this.images='';
          this.model='';
          this.description='';
          this.company='';
          this.isError=false
          this.isChange=true
  
        }

       

      });
        


    };

    isError:any
  isChange:any=false



 

}
