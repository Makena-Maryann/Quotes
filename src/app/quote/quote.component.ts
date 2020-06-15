import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'No matter how big a nation is, it is no stronger than its weakest people, and as long as you keep a person down, some part of you has to be down there to hold him down, so it means you cannot soar as you might otherwise.',
      'Marian Anderson',
      'Christopher',
      new Date(2020, 5, 12)
    ),
    new Quote(
      `There is no collective slavery revenge fantasy among black people, but I am certain, if there were one, it would not be about white people, not at all. My slavery revenge fantasy would probably involve being able to read and write without fear of punishment or persecution coupled with a long vacation in Paris. It would involve the reclamation of dignity on my own terms and not with the 'generous' assistance of benevolent white people who were equally complicit in the ills of slavery.`,
      'Roxane Gay',
      'Larry',
      new Date(2020, 5, 13)
    ),
  ];

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  upVotes(index) {
    this.quotes[index].upVote++;
  }
  downVotes(index) {
    this.quotes[index].downVote++;
  }

  addNewQuote(quote) {
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }
  constructor() {}

  ngOnInit(): void {}
}
