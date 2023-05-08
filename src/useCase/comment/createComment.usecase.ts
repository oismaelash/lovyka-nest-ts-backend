import {
    errorResponse,
    HttpResponse,
    successResponse,
  } from '../../helpers/contracts';
  import { UseCase } from '../../helpers/useCase';
  import { Injectable } from '@nestjs/common';
  import { CommentService } from '../../services/comment.service';
import { CommentRequestDTO } from '../../core/dtos';
  
  @Injectable()
  export class CreateCommentUseCase implements UseCase {
    constructor(private readonly commentService: CommentService) {}
  
    async handle(serviceId: string, commentRequestDTO: CommentRequestDTO): Promise<HttpResponse> {
      try {
        const result = await this.commentService.create(serviceId, commentRequestDTO);
        return successResponse(result);
      } catch (error) {
        return errorResponse(error);
      }
    }
  }
  