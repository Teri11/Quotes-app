import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Quotes','“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”',' – Robert Frost'),
    new Quote('Quotes','“We must not allow other people’s limited perceptions to define us.”',' –  Virginia Satir'),
    new Quote('Quotes','“Wise men speak because they have something to say; fools because they have to say something.”',' –  Plato'),
    new Quote('Quotes','“If you cannot do great things, do small things in a great way.”',' –   Napoleon Hill'),
    

  ]; 

  constructor() { }

  ngOnInit() {
  }

}
