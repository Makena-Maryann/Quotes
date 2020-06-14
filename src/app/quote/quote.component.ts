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
      'I can’t make people not afraid of black people. I don’t know what’s going on. I can’t explain what’s happening in your head. But maybe if I show up every day as a human, a good human, doing wonderful things, loving my family, loving your kids, taking care of things that I care about—maybe, just maybe that work will pick away at the scabs of your discrimination. Maybe that slowly will unravel it. That’s all we have, because we can’t do it for them, because they’re broken. Their brokenness in how they see us is a reflection of this brokenness. And you can’t fix that. All you can do is the work.',
      'Michelle Obama',
      'Melissa'
    ),
    new Quote(
      'No matter how big a nation is, it is no stronger than its weakest people, and as long as you keep a person down, some part of you has to be down there to hold him down, so it means you cannot soar as you might otherwise.',
      'Marian Anderson',
      'Christopher'
    ),
    new Quote(
      `There is no collective slavery revenge fantasy among black people, but I am certain, if there were one, it would not be about white people, not at all. My slavery revenge fantasy would probably involve being able to read and write without fear of punishment or persecution coupled with a long vacation in Paris. It would involve the reclamation of dignity on my own terms and not with the 'generous' assistance of benevolent white people who were equally complicit in the ills of slavery.`,
      'Roxane Gay',
      'Larry'
    ),
    new Quote(
      'The Black female is assaulted in her tender years by all those common forces of nature at the same time that she is caught in the tripartite crossfire of masculine prejudice, white illogical hate and Black lack of power. The fact that the adult American Negro female emerges a formidable character is often met with amazement, distaste and even belligerence. It is seldom accepted as an inevitable outcome of the struggle won by survivors and deserves respect if not enthusiastic acceptance.',
      'Maya Angelou',
      'Christine'
    ),
  ];

  upVotes(index) {
    this.quotes[index].upVote++;
  }
  downVotes(index) {
    this.quotes[index].downVote++;
  }

  constructor() {}

  ngOnInit(): void {}
}
