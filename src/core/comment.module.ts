import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PrismaModule } from 'prisma/prisma.module';
import { LikeController } from './controllers/like.controller';
import { LikeService } from '@/services/like.service';
import { AddLikeUseCase } from '@/useCase/like/addLike.usecase';
import { RemoveLikeUseCase } from '@/useCase/like/removeLike.usecase';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from '@/services/comment.service';
import { CreateCommentUseCase } from '@/useCase/comment/createComment.usecase';
import { GetAllByServiceCommentUseCase } from '@/useCase/comment/getAllByServiceComment.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [CommentController],
  providers: [PrismaService, CommentService, CreateCommentUseCase, GetAllByServiceCommentUseCase],
})
export class CommentModule {}
