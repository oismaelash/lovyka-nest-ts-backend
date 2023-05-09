import {
  Controller,
  Get,
  Res,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { HttpResponse } from '../../helpers/contracts';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ServiceResponseDTO } from '../dtos/service.response.dto';
import { CreateServiceUseCase } from '../../useCase/service/createService.usecase';
import { ServiceRequestDTO } from '../dtos/service.request.dto';
import { GetAllServiceUseCase } from '../../useCase/service/getAllService.usecase';
import { GetOneServiceUseCase } from '../../useCase/service/getOneService.usecase';
import { UpdateServiceUseCase } from '../../useCase/service/updateService.usecase';
import { DeleteServiceUseCase } from '../../useCase/service/deleteService.usecase';

@ApiTags('service')
@Controller('service')
export class ServiceController {
  constructor(
    private readonly createServiceUseCase: CreateServiceUseCase,
    private readonly getAllServiceUseCase: GetAllServiceUseCase,
    private readonly getOneServiceUseCase: GetOneServiceUseCase,
    private readonly updateServiceUseCase: UpdateServiceUseCase,
    private readonly deleteServiceUseCase: DeleteServiceUseCase,
  ) {}

  @ApiOperation({
    summary: 'Create a new service on system',
  })
  @ApiResponse({
    status: 200,
    description: 'Success Response',
    type: ServiceResponseDTO
  })
  @ApiResponse({
    status: 500,
    description: 'Error on server.',
  })
  @Post()
  async create(
    @Res() response,
    @Body() body: ServiceRequestDTO,
  ): Promise<HttpResponse> {
    const result = await this.createServiceUseCase.handle(body);
    return response.status(result.status).json(result.data);
  }

  @ApiOperation({
    summary: 'Get all services on system',
  })
  @ApiResponse({
    status: 200,
    description: 'Success Response',
    isArray: true,
    type: ServiceResponseDTO,
  })
  @ApiResponse({
    status: 500,
    description: 'Error on server.',
  })
  @Get('all')
  async getAll(@Res() response): Promise<HttpResponse> {
    const result = await this.getAllServiceUseCase.handle();
    return response.status(result.status).json(result.data);
  }

  @ApiOperation({
    summary: 'Get one service by id on system',
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
  @Get('one')
  async getOne(
    @Query('id') id: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.getOneServiceUseCase.handle(id);
    return response.status(result.status).json(result);
  }

  @ApiOperation({
    summary: 'Update one service by id on system',
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
  @Put()
  async update(
    @Query('id') id: string,
    @Body() body: ServiceRequestDTO,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.updateServiceUseCase.handle(id, body);
    return response.status(result.status).json(result);
  }

  @ApiOperation({
    summary: 'Delete one service by id on system',
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
  @Delete()
  async delete(
    @Query('id') id: string,
    @Res() response,
  ): Promise<HttpResponse> {
    const result = await this.deleteServiceUseCase.handle(id);
    return response.status(result.status).json(result);
  }
}
