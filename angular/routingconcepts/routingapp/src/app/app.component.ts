import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'routingapp';
  constructor(){
    this.title = 'valuechangedin app constructor'
    console.log(this.title);
  }
  ngOnInit(){
    this.title = 'value changed in app ngoninit'
    console.log(this.title)
  }
  
}
