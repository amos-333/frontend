import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-viewhotdeals',
  templateUrl: './viewhotdeals.component.html',
  styleUrls: ['./viewhotdeals.component.css']
})
export class ViewhotdealsComponent implements OnInit {

  constructor(private auth:AuthService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.auth.viewhotdeals({}).subscribe((res)=>{
       this.data = res.data 
       console.log(this.data)
     })
   };
 
   ngOnInit(): void {};
   data :any=[];
   

       deleteEvent=(id:any)=>{
         const deleteData:any= {"_id": id}
         this.auth.removehotdeals(deleteData).subscribe((response:any)=>{
           if (response.status == 'success') {
             alert("successfully deleted")
             this.fetchData()
           } else {
             alert("Error in deletion")
           }
         })
       };

}
