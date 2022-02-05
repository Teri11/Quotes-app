import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Quotes','Education is the key to success','by Trevor Noah'),
    new Quote('Quotes','Teach a man how to fish','by Mane Sadio'),
    new Quote('Quotes','Respect to man is the least art of courtesy','by Bill Cosbey'),
    new Quote('Quotes','Discpline maketh a man','by Jones Jessica'),
    

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
