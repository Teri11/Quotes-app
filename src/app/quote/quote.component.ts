import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[]=[
    new Quote('Quotes','“Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.”',' posted by Teri',new Date(1999,7,12),'– Robert Frost',0,0),
    new Quote('Quotes','“We must not allow other people’s limited perceptions to define us.”','posted by Teri',new Date(1984,1,12),'–  Virginia Satir',0,0),
    new Quote('Quotes','“Wise men speak because they have something to say; fools because they have to say something.”','posted by Teri',new Date(2022,1,1),'– Plato',0,0),
    new Quote('Quotes','“If you cannot do great things, do small things in a great way.”','posted by Teri',new Date(2010,5,12),'– Napoleon Hill',0,0),
    
  ]; 
toggleDetails(index:number){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete:any,index:number){
  if (isComplete) {
    let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].description}?`)

  if (toDelete){
    this.quotes.splice(index,1);
    }
  }

}
addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.topic =quote.topic;
  quote.name =quote.name;
  quote.quote =quote.quote;
  quote.postDate =new Date(quote.postDate)
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
