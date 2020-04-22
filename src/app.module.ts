import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommentModule } from './modules/comment/comment.module';
import { config } from 'dotenv';

@Module({
  imports: [CommentModule],
  controllers: [AppController],
})
export class AppModule {
  constructor() {
    if (process.env.NODE_ENV !== 'production') {
      config();
    }
  }
}
