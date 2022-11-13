import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-viewrecent',
  templateUrl: './viewrecent.component.html',
  styleUrls: ['./viewrecent.component.css']
})
export class ViewrecentComponent implements OnInit {

  constructor(private auth:AuthService) {
    this.fetchData()
   }
  fetchData=()=>{
    this.auth.viewrecents().subscribe((res)=>{
       this.data = res.data 
       console.log(this.data)
     })
   };
 
   ngOnInit(): void {};
   data :any=[];
   

       deleteEvent=(id:any)=>{
         const deleteData:any= {"_id": id}
         this.auth.removerecent(deleteData).subscribe((response:any)=>{
           if (response.status == 'success') {
             alert("successfully deleted")
             this.fetchData()
           } else {
             alert("Error in deletion")
           }
         })
       };

}
