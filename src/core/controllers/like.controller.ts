import { Controller, Res, Query, Post } from '@nestjs/common';
import { HttpResponse } from '../../helpers/contracts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceResponseDTO } from '../adapters/service.response.dto';
import { AddLikeUseCase } from '@/useCase/like/addLike.usecase';
import { RemoveLikeUseCase } from '@/useCase/like/removeLike.usecase';

@ApiTags('like')
@Controller('like')
export class LikeController {
  constructor(
    private readonly addLikeUseCase: AddLikeUseCase,
    private readonly removeLikeUseCase: RemoveLikeUseCase,
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
  @Post()
  async addLike(
    @Query('serviceId') serviceId: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.addLikeUseCase.handle(serviceId);
    return response.status(result.status).json(result);
  }

  @ApiOperation({
    summary: 'Remove one like on service',
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
  async removeLike(
    @Query('serviceId') serviceId: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.removeLikeUseCase.handle(serviceId);
    return response.status(result.status).json(result);
  }
}
