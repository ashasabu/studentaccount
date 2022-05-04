import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private db:DatabaseService,private router:Router,private fb:FormBuilder) { }
registerForm=this.fb.group({
  studentid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  studentname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  mobileno:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(10),Validators.minLength(10)]]
})
  ngOnInit(): void {
  }
register(){
  alert("login clicked")
  var studentid=this.registerForm.value.studentid
  var studentname=this.registerForm.value.studentname

  var password=this.registerForm.value.password

  var mobileno=this.registerForm.value.mobileno
  if(this.registerForm.valid){
    const result=this.db.register(studentid,studentname,password,mobileno)
    if(result){
      alert("sucessfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exist Please login")
    }
  }
  else{
    alert("Invalid Forms!!!")
  }

}
}
