import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CommentModule } from './modules/comment/comment.module';

@Module({
  imports: [CommentModule],
  controllers: [AppController],
})
export class AppModule {}
