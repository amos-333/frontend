import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private auth:AuthService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.auth.viewproducts().subscribe((res)=>{
       this.data = res.data 
       console.log(this.data)
     })
   };
 
   ngOnInit(): void {};
   data :any=[];
   

       deleteEvent=(id:any)=>{
         const deleteData:any= {_id: id}
         this.auth.removeproduct(deleteData).subscribe((response:any)=>{
           if (response.status == 'success') {
             alert("successfully deleted")
             this.fetchData()
           } else {
             alert("Error in deletion")
           }
         })
       };

}
