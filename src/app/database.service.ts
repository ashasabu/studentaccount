import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database:any={
    1000:{studentid:1000,studentname:"meena",password:"1000",mobileno:9798969594},
    1001:{studentid:1001,studentname:"neena",password:"1001",mobileno:9798969596},
    1002:{studentid:1002,studentname:"teena",password:"1002",mobileno:9798969598}
  }
  currentStudentname:any
  currentStudentid:any
  currentmobileno:any
  constructor() { }
  register(studentid:any,studentname:any,password:any,mobileno:any)
  {
    let database=this.database
    if(studentid in database){
      //existing user
      return false
    }
    else{
      database[studentid]={
        studentid,
        studentname,
        password,
        mobileno}
        console.log(this.database);
        
        return true

      }
    }
 
 //login
 login(studentid:any,password:any){
 
  
    
  let database=this.database
  if(studentid in database){
     if(password == database[studentid]["password"]){
      //already exist
      this.currentStudentname=database[studentid]["studentname"]
      this.currentmobileno=database[studentid]["mobileno"]
    
      
      this.currentStudentid=studentid
  
 


return true
      
    }
    else{
      alert("invalid password")
      return false
    }

  }
  else{
    alert("user does not exist")
    return false
  }
 
 
 
 
  }

}