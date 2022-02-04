import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = string[];

  constructor(){
    this.quotes=['The early bird catches the warm','No man is an island','Respect is a two way-traffic']
  }
  
}
