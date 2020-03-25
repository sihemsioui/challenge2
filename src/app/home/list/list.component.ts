import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input()
  items:any;
  users:any ;
  isValid=true;
  ind:number;
  editUser:any;


  ngOnInit(): void {
    this.items=JSON.parse(localStorage.getItem("users"));
  }

  onDelete(index){
    this.users=JSON.parse(localStorage.getItem("users"));
    
    this.users.splice(index,1);
    this.items=this.users;
    localStorage.setItem("users",JSON.stringify(this.users));
  }
 


 
 



onEdit(indx){
  //console.log(this.users[indx]);
 // this.editUser=this.users[indx];
  //console.log(this.editUser);

}

}
