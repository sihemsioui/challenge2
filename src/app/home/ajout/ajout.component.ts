import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmailValidator, Validators, FormControl, FormGroup } from '@angular/forms';
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
  myForm: FormGroup;
  constructor() { }

  
  ngOnInit(): void {
    this.myForm=new FormGroup({
      name: new FormControl('',Validators.required),
      login: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      password: new FormControl('',[Validators.minLength(8),
        Validators.required,
     
      ]),
    });
  
  }
  onSubmit(form) {
    
    
    
   this.newUser.emit(form.value);
  

}
resetUserForm(form){
form.resetForm();
}



}
