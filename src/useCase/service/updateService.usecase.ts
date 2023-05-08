import { ServiceRequestDTO } from '../../core/dtos';
import {
  errorResponse,
  HttpResponse,
  successResponse,
} from '../../helpers/contracts';
import { UseCase } from '../../helpers/useCase';
import { ServiceService } from '../../services/service.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdateServiceUseCase implements UseCase {
  constructor(private readonly serviceService: ServiceService) {}

  async handle(serviceId: string, serviceRequestDTO: ServiceRequestDTO): Promise<HttpResponse> {
    try {
      const result = await this.serviceService.update(serviceId, serviceRequestDTO)
      return successResponse(result);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
