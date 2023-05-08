import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '../../helpers/useCase';
import { Injectable } from '@nestjs/common';
import { LikeService } from '../../services/like.service';

@Injectable()
export class AddLikeUseCase implements UseCase {
  constructor(private readonly likeService: LikeService) {}

  async handle(serviceId: string): Promise<HttpResponse> {
    try {
      const result = await this.likeService.addLike(serviceId)
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
