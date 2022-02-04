import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    {id:1, name:'Education is the key to success'},
    {id:2,name:'Teach a man how to fish'},
    {id:3,name:'Respect to man is the least art of courtesy'},
    {id:4,name:'Discpline maketh a man'},
    

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
