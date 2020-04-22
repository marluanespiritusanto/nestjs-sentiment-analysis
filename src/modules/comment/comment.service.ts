import { Injectable } from '@nestjs/common';
import {
  TextAnalyticsClient,
  AzureKeyCredential,
} from '@azure/ai-text-analytics';

@Injectable()
export class CommentService {
  private readonly client = null;
  constructor() {
    this.client = new TextAnalyticsClient(
      process.env.ENDPOINT,
      new AzureKeyCredential(process.env.TEXT_ANALYTICS_API_KEY),
    );
  }

  async analizeComment(comment: string) {
    const [response] = await this.client.analyzeSentiment([comment], 'es');
    return response.sentiment;
  }
}
