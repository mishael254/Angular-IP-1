import { Component } from '@angular/core';
import { Quote } from "./quote";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {name:'The purpose of our lives is to be happy.'},
    {name:'Life is what happens when you’re busy making other plans.'},
    {name:'Get busy living or get busy dying.'},
    {name:'You only live once, but if you do it right, once is enough.'},  
    {name:'Many of life’s failures are people who did not realize how close they were to success when they gave up.'}
  ]
}
