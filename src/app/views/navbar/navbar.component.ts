import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     //Using JQuery into responsive menu => active
     
  $(document).ready(function() {

      $('#menubar').click(function(){
        $("#menu").toggleClass("active-nav")
      
       })
  })

 }

 

}


   
  
