import { Component, OnInit,Input,  } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  show(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  @Input() quote: Quote;
  
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  

  quotes:Quote[]=[
    new Quote ('The purpose of our lives is to be happy'),
    new Quote('Life is what happens when you’re busy making other plans.'),
    new Quote('Get busy living or get busy dying.'),
    new Quote('You only live once, but if you do it right, once is enough.'),  
    new Quote('Many of life’s failures are people who did not realize how close they were to success when they gave up.'),
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
