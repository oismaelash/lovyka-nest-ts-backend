import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '../../helpers/useCase';
import { Injectable } from '@nestjs/common';
import { ServiceRequestDTO } from '../../core/dtos/service.request.dto';
import { ServiceService } from '../../services/service.service';

@Injectable()
export class CreateServiceUseCase implements UseCase {
  constructor(private readonly service: ServiceService) {}

  async handle(serviceRequestDTO: ServiceRequestDTO): Promise<HttpResponse> {
    try {
      const result = await this.service.create(serviceRequestDTO)
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
