import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from '../services/comment.service';
import { CreateCommentUseCase } from '../useCase/comment/createComment.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [PrismaService, CommentService, CreateCommentUseCase],
})
export class CommentModule {}
