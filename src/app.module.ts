import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from './core/service.module';
import { LikeModule } from './core/like.module';
import { CommentModule } from './core/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServiceModule,
    LikeModule,
    CommentModule,
  ],
})
export class AppModule {}
