import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {name:'The purpose of our lives is to be happy.'},
    {name:'Life is what happens when you’re busy making other plans.'},
    {name:'Get busy living or get busy dying.'},
    {name:'You only live once, but if you do it right, once is enough.'},  
    {name:'Many of life’s failures are people who did not realize how close they were to success when they gave up.'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
