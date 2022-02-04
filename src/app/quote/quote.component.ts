import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    {topic:'Quotes', name:'Education is the key to success',description:'by Trevor Noah'},
    {topic:'Quotes',name:'Teach a man how to fish',description:'by Mane Sadio'},
    {topic:'Quotes',name:'Respect to man is the least art of courtesy',description:'by Bill Cosbey'},
    {topic:'Quotes',name:'Discpline maketh a man',description:'Jones Jessica'},
    

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
