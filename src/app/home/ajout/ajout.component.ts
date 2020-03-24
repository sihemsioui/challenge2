import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { User } from 'src/app/user';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  userModel= new User('','', '','');


  @Output()
  newUser = new EventEmitter<any>();

  constructor() { }

  
  ngOnInit(): void {
  
  }
  onSubmit(form) {
    
    
    
   this.newUser.emit(form.value);
  

}
resetUserForm(form){
form.resetForm();
}



}
