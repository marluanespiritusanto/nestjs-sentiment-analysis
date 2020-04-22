import { Injectable } from '@nestjs/common';
import * as Sentiment from 'sentiment';

@Injectable()
export class CommentService {
  private readonly _sentimentAnalizer = null;
  constructor() {
    this._sentimentAnalizer = new Sentiment();
  }
  analizeComment(comment: string) {
    const { score } = this._sentimentAnalizer.analyze(comment);

    return score;
  }
}
