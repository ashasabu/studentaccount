import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-examregister',
  templateUrl: './examregister.component.html',
  styleUrls: ['./examregister.component.css']
})
export class ExamregisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
