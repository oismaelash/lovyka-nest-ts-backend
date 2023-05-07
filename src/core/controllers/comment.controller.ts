import { Controller, Res, Query, Post, Body } from '@nestjs/common';
import { HttpResponse } from '../../helpers/contracts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceResponseDTO } from '../adapters/service.response.dto';
import { CommentRequestDTO } from '../adapters/comment.request.dto';
import { CreateCommentUseCase } from '@/useCase/comment/createComment.usecase';
import { CommentResponseDTO } from '../adapters';
import { GetAllByServiceCommentUseCase } from '@/useCase';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly createCommetUseCase: CreateCommentUseCase,
    private readonly getAllByServiceCommentUseCase: GetAllByServiceCommentUseCase) {}

  @ApiOperation({
    summary: 'Add one comment on service',
  })
  @ApiResponse({
    status: 200,
    description: 'Success Response',
    type: ServiceResponseDTO,
  })
  @ApiResponse({
    status: 500,
    description: 'Error on server.',
  })
  @Post()
  async createComment(
    @Query('serviceId') serviceId: string,
    @Body() body: CommentRequestDTO,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.createCommetUseCase.handle(serviceId, body);
    return response.status(result.status).json(result);
  }

  @ApiOperation({
    summary: 'Get comments by service',
  })
  @ApiResponse({
    status: 200,
    description: 'Success Response',
    type: Array<CommentResponseDTO>,
  })
  @ApiResponse({
    status: 500,
    description: 'Error on server.',
  })
  @Post()
  async getAllCommentByService(
    @Query('serviceId') serviceId: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.getAllByServiceCommentUseCase.handle(serviceId);
    return response.status(result.status).json(result);
  }
}
