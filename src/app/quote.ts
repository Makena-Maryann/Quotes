export class Quote {
  upVote: number;
  downVote: number;
  constructor(
    public statement: string,
    public author: string,
    public name: string
  ) {
    this.upVote = 0;
    this.downVote = 0;
  }
}
