import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:any
id:any
no:any
  constructor(private ds:DatabaseService,private router:Router) { 
    this.name=this.ds.currentStudentname
    this.id=this.ds.currentStudentid
    this.no=this.ds.currentmobileno
  }

  ngOnInit(): void {
  }
register(){
  
}
logout(){
  this.router.navigateByUrl("examregister")
}
}
