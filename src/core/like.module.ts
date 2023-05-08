import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { LikeController } from './controllers/like.controller';
import { LikeService } from '../services/like.service';
import { AddLikeUseCase } from '../useCase/like/addLike.usecase';
import { AddDislikeUseCase } from '../useCase/like/addDislike.usecase';

@Module({
  imports: [PrismaModule],
  controllers: [LikeController],
  providers: [PrismaService, LikeService, AddLikeUseCase, AddDislikeUseCase],
})
export class LikeModule {}
