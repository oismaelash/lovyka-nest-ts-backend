import { Controller, Res, Query, Post, Body, Get } from '@nestjs/common';
import { HttpResponse } from '../../helpers/contracts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceResponseDTO } from '../dtos/service.response.dto';
import { CommentRequestDTO } from '../dtos/comment.request.dto';
import { CreateCommentUseCase } from '../../useCase/comment/createComment.usecase';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly createCommetUseCase: CreateCommentUseCase) {}

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
}
