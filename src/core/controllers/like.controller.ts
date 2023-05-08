import { Controller, Res, Query, Post } from '@nestjs/common';
import { HttpResponse } from '../../helpers/contracts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceResponseDTO } from '../dtos/service.response.dto';
import { AddLikeUseCase } from '../../useCase/like/addLike.usecase';
import { AddDislikeUseCase } from '../../useCase/like/addDislike.usecase';

@ApiTags('like')
@Controller('like')
export class LikeController {
  constructor(
    private readonly addLikeUseCase: AddLikeUseCase,
    private readonly addDislikeUseCase: AddDislikeUseCase,
  ) {}

  @ApiOperation({
    summary: 'Add one like on service',
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
  @Post('add-like')
  async addLike(
    @Query('serviceId') serviceId: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.addLikeUseCase.handle(serviceId);
    return response.status(result.status).json(result.data);
  }

  @ApiOperation({
    summary: 'Add one dislike on service',
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
  @Post('add-dislike')
  async addDislike(
    @Query('serviceId') serviceId: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.addDislikeUseCase.handle(serviceId);
    return response.status(result.status).json(result.data);
  }
}
