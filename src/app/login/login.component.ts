import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm=this.fb.group({
  studentid:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})



  constructor(private router:Router,private db:DatabaseService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
// login(){
//   alert("login clicked")
//   this.router.navigateByUrl("dashboard")
// }
// studentid(event:any){
//   console.log(event.target.value);
// }

login(){
 
  
  var studentid=this.loginForm.value.studentid
  
  
  var password=this.loginForm.value.password
  
  let database=this.db.database
  //call login in dataservice
  if(this.loginForm.valid){
    const result=this.db.login(studentid,password)
    if(result){
      alert("login sucessful!!!!")
         this.router.navigateByUrl("dashboard")
    }
  
  }
  else{
    alert("Invalid Forms")
  }
  }
  

}
