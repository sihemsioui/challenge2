import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
   users:any;
   items=[];

  ngOnInit(): void {
    
  }
  addUser(user) {
   
   
    this.users=JSON.parse(localStorage.getItem("users")) || [];
    this.users.push({Name: user.name,
         Email: user.email,
         Login: user.login,
         Pass: user.password});
     localStorage.setItem("users",JSON.stringify(this.users));
      this.insertNewRecord();
 
 }
 
 
  
  insertNewRecord() {
   this.items=JSON.parse(localStorage.getItem("users")) || [];
     
   }


 
 




}
