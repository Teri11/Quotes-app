import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Quotes','“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”',' posted by Teri',new Date(1999,7,12),'– Robert Frost'),
    new Quote('Quotes','“We must not allow other people’s limited perceptions to define us.”','posted by Teri',new Date(1984,1,12),'–  Virginia Satir'),
    new Quote('Quotes','“Wise men speak because they have something to say; fools because they have to say something.”','posted by Teri',new Date(2022,1,1),'– Plato'),
    new Quote('Quotes','“If you cannot do great things, do small things in a great way.”','posted by Teri',new Date(2010,5,12),'– Napoleon Hill'),
    

  ]; 
toggleDetails(index:number){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete:any,index:number){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
  constructor() { }

  ngOnInit() {
  }

}
